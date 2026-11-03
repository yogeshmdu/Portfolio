/**
 * Vector Wordmark — WebGL Shader Typography
 * Implements interactive vector blueprint shader with dotted font atlas,
 * coordinate lattice handles, dashed bounding rig, and laser spotlight reveal.
 */

(function () {
  const MAX_DPR = 2;
  const REF_WIDTH = 1200;
  const MAX_TEX = 4096;

  const HANDLES = 3;
  const CELL_ASPECT = 0.6;
  const DRIFT_X = 0.08;
  const DRIFT_Y = 0.04;
  const DRIFT_RATE = 1.3;
  const DRIFT_RATE_Y = 1.3 * 1.3;
  const SWEEP_RATE = 0.5;
  const SWEEP_BAND = 0.28;
  const RESNAP = 0.2;
  const DAMP_REF = 20;
  const SPEED_REF = 50;
  const LABEL_MAX = 0.65;
  const DOT_DIAMETER = 4 / 440;
  const DOT_PITCH = 12 / 440;

  const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
  const fract = (x) => x - Math.floor(x);

  function parseColor(input, fallback) {
    if (!input) return fallback;
    let s = String(input).trim();
    if (s.slice(0, 4).toLowerCase() === "var(") {
      const comma = s.indexOf(",");
      const close = s.lastIndexOf(")");
      if (comma >= 0 && close > comma) s = s.slice(comma + 1, close).trim();
    }
    if (s[0] === "#") {
      let h = s.slice(1);
      if (h.length === 3 || h.length === 4) {
        let x = "";
        for (const c of h) x += c + c;
        h = x;
      }
      if (h.length === 6) h += "ff";
      if (h.length !== 8 || /[^0-9a-f]/i.test(h)) return fallback;
      return [
        parseInt(h.slice(0, 2), 16) / 255,
        parseInt(h.slice(2, 4), 16) / 255,
        parseInt(h.slice(4, 6), 16) / 255,
        parseInt(h.slice(6, 8), 16) / 255,
      ];
    }
    const m = s.match(/^(rgba?|hsla?)\(([^)]*)\)$/i);
    if (!m) return fallback;
    const parts = m[2].split(/[\s,/]+/).filter((p) => p.length > 0);
    if (parts.length < 3) return fallback;
    const num = (t, scale) => {
      const v = parseFloat(t);
      if (!Number.isFinite(v)) return 0;
      return t.indexOf("%") >= 0 ? (v / 100) * scale : v;
    };
    const alpha = parts.length > 3 ? clamp(num(parts[3], 1), 0, 1) : 1;
    if (m[1].toLowerCase().slice(0, 3) === "rgb") {
      return [
        clamp(num(parts[0], 255) / 255, 0, 1),
        clamp(num(parts[1], 255) / 255, 0, 1),
        clamp(num(parts[2], 255) / 255, 0, 1),
        alpha,
      ];
    }
    return fallback;
  }

  const VERT = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
    vUv = aPos * 0.5 + 0.5;
    gl_Position = vec4(aPos, 0.0, 1.0);
}`;

  const FRAG = `
precision highp float;

uniform sampler2D uMap;
uniform vec2 uRes;
uniform vec2 uAtlas;
uniform vec2 uPtr;
uniform float uReach;
uniform vec3 uText;
uniform vec3 uShade;
uniform vec4 uAccent;
uniform vec2 uV0;
uniform vec2 uV1;
uniform vec2 uV2;
uniform float uHalf;

varying vec2 vUv;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 blurRG(vec2 uv, float e) {
    vec4 sum = vec4(0.0);
    for (int i = 0; i < 6; i++) {
        float fi = float(i);
        float th = radians(fi / 6.0 * 360.0);
        vec2 dir = vec2(cos(th), sin(th));
        vec2 off = dir * (hash(vec2(fi, uv.x + uv.y)) + e);
        sum += texture2D(uMap, uv + off * e);
    }
    return (sum / 6.0).rg;
}

vec2 segment(vec2 p, vec2 a, vec2 b) {
    vec2 ab = b - a;
    vec2 ap = p - a;
    float t = clamp(dot(ap, ab) / max(dot(ab, ab), 1e-8), 0.0, 1.0);
    return vec2(length(ap - ab * t), t);
}

float stroke(float d, float lw, float px) {
    return 1.0 - smoothstep(lw, lw + px, d);
}

float dashedLine(vec2 p, vec2 a, vec2 b, float lw, float px) {
    vec2 s = segment(p, a, b);
    float dash = step(0.5, fract(s.y * length(b - a) * 100.0));
    return stroke(s.x, lw, px) * dash;
}

float boxEdge(vec2 p, vec2 c, float h, float lw, float px) {
    vec2 q = abs(p - c) - vec2(h);
    float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0);
    return stroke(abs(d), lw, px);
}

void main() {
    float aspect = uRes.x / uRes.y;

    vec2 E = (vUv * uRes - (uRes - uAtlas) * 0.5) / uAtlas;
    float inside = step(0.0, E.x) * step(E.x, 1.0) * step(0.0, E.y) * step(E.y, 1.0);
    vec2 safeUv = clamp(E, 0.0, 1.0);

    float b = clamp(1.0 - E.y * 3.5, 0.0, 1.0) * 0.008;
    vec2 soft = blurRG(safeUv, b);
    vec2 sharp = blurRG(safeUv, b * 0.1);

    float d = length((vUv - uPtr) / vec2(1.0, aspect));
    float k = 1.0 - pow(smoothstep(0.0, max(uReach, 1e-4), d), 3.0);

    float mask = mix(soft.r, sharp.g, k) * inside;
    vec3 fill = mix(uShade, uText, smoothstep(0.0, 1.0, E.y));

    vec2 P = vec2(vUv.x * aspect, vUv.y);
    float px = 1.0 / uRes.y;
    float lw = px * 0.2;
    float lines = max(
        max(dashedLine(P, uV0, uV1, lw, px), dashedLine(P, uV1, uV2, lw, px)),
        dashedLine(P, uV2, uV0, lw, px)
    );
    float boxes = max(
        max(boxEdge(P, uV0, uHalf, lw, px), boxEdge(P, uV1, uHalf, lw, px)),
        boxEdge(P, uV2, uHalf, lw, px)
    );
    float A = max(lines, boxes) * uAccent.a * (1.0 - vUv.y);

    // Card premultiplied with smooth foot melting
    float footFade = pow(clamp(E.y, 0.0, 1.0), 0.7);
    vec4 card = vec4(fill * mask, mask) * footFade;
    vec4 comp = vec4(uAccent.rgb * A, A) + card * (1.0 - A);

    gl_FragColor = comp;
}`;

  function compile(gl, vs, fs) {
    const make = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.warn("Shader compilation error:", gl.getShaderInfoLog(sh));
      }
      return sh;
    };
    const p = gl.createProgram();
    gl.attachShader(p, make(gl.VERTEX_SHADER, vs));
    gl.attachShader(p, make(gl.FRAGMENT_SHADER, fs));
    gl.bindAttribLocation(p, 0, "aPos");
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
      console.warn("Program link error:", gl.getProgramInfoLog(p));
    }
    return p;
  }

  function fontString(f, px) {
    return `${f.style} ${f.weight} ${px}px ${f.family}`;
  }

  function buildAtlas(text, f, drawFontPx, dpr) {
    const probe = document.createElement("canvas").getContext("2d");
    if (!probe) return null;

    const setFont = (ctx, px) => {
      ctx.font = fontString(f, px);
      try {
        if ("letterSpacing" in ctx) {
          ctx.letterSpacing = f.letterSpacing;
        }
      } catch (e) {}
    };

    const measure = (px) => {
      setFont(probe, px);
      const m = probe.measureText(text);
      const asc = m.actualBoundingBoxAscent || px * 0.8;
      const desc = m.actualBoundingBoxDescent || px * 0.22;
      return { w: Math.max(1, m.width), asc, desc };
    };

    let fpx = Math.max(8, drawFontPx * dpr);
    let m = measure(fpx);
    let pad = fpx * 0.12;
    const over = Math.max((m.w + pad * 2) / MAX_TEX, (m.asc + m.desc + pad * 2) / MAX_TEX);
    if (over > 1) {
      fpx = Math.max(8, fpx / over);
      m = measure(fpx);
      pad = fpx * 0.12;
    }

    const w = Math.max(1, Math.ceil(m.w + pad * 2));
    const h = Math.max(1, Math.ceil(m.asc + m.desc + pad * 2));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);
    setFont(ctx, fpx);
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "left";
    ctx.globalCompositeOperation = "lighter";

    // Solid text fill on Red channel
    ctx.fillStyle = "#ff0000";
    ctx.fillText(text, pad, pad + m.asc);

    // Dotted vector outlines on Green channel
    const block = m.asc + m.desc;
    ctx.strokeStyle = "#00ff00";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = Math.max(1.2, block * DOT_DIAMETER);
    ctx.setLineDash([0, Math.max(2.5, block * DOT_PITCH)]);
    ctx.strokeText(text, pad, pad + m.asc);

    const cssPerPx = drawFontPx / fpx;
    return { canvas, cssW: w * cssPerPx, cssH: h * cssPerPx };
  }

  class VectorWordmarkController {
    constructor(hostElement, options = {}) {
      this.host = hostElement;
      if (!this.host) return;

      this.text = options.text || "YOGESH B";
      this.fontSpec = {
        family: options.fontFamily || "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
        weight: options.fontWeight || "800",
        style: "normal",
        size: options.fontSize || 120,
        letterSpacing: options.letterSpacing || "-0.03em",
      };

      this.textColor = options.textColor || "#00f2fe";
      this.shade = options.shade || "#4facfe";
      this.accent = options.accent || "#00f2fe";
      this.reach = options.reach || 260;
      this.speed = options.speed || 50;
      this.damping = options.damping || 60;
      this.hg = { size: 109, spread: 27, labels: true };

      this.init();
    }

    init() {
      // Build container markup
      this.host.innerHTML = "";
      this.canvas = document.createElement("canvas");
      this.canvas.className = "vector-wordmark-canvas";
      this.host.appendChild(this.canvas);

      this.labelElements = [];
      for (let i = 0; i < HANDLES; i++) {
        const el = document.createElement("div");
        el.className = "vector-wordmark-label";
        this.host.appendChild(el);
        this.labelElements.push(el);
      }

      const attrs = {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        premultipliedAlpha: true,
        powerPreference: "high-performance",
      };

      this.gl = this.canvas.getContext("webgl2", attrs) || this.canvas.getContext("webgl", attrs);
      if (!this.gl) {
        console.warn("WebGL not supported for Vector Wordmark, falling back to static typography.");
        this.host.innerHTML = `<h1 class="hero-title" style="margin: 0;">Hi, I'm <span class="gradient-text">${this.text}</span></h1>`;
        return;
      }

      const isGL2 = typeof WebGL2RenderingContext !== "undefined" && this.gl instanceof WebGL2RenderingContext;
      this.isGL2 = isGL2;

      const gl = this.gl;
      this.prog = compile(gl, VERT, FRAG);
      this.U = {
        map: gl.getUniformLocation(this.prog, "uMap"),
        res: gl.getUniformLocation(this.prog, "uRes"),
        atlas: gl.getUniformLocation(this.prog, "uAtlas"),
        ptr: gl.getUniformLocation(this.prog, "uPtr"),
        reach: gl.getUniformLocation(this.prog, "uReach"),
        text: gl.getUniformLocation(this.prog, "uText"),
        shade: gl.getUniformLocation(this.prog, "uShade"),
        accent: gl.getUniformLocation(this.prog, "uAccent"),
        v0: gl.getUniformLocation(this.prog, "uV0"),
        v1: gl.getUniformLocation(this.prog, "uV1"),
        v2: gl.getUniformLocation(this.prog, "uV2"),
        half: gl.getUniformLocation(this.prog, "uHalf"),
      };

      const quad = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, quad);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
      gl.enableVertexAttribArray(0);
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.disable(gl.BLEND);

      this.tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 255]));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

      this.boxW = Math.max(1, this.host.offsetWidth);
      this.boxH = Math.max(1, this.host.offsetHeight);
      this.boxDirty = true;
      this.dpr = 1;
      this.bufW = 0;
      this.bufH = 0;
      this.atlasRatioW = 1;
      this.atlasRatioH = 1;
      this.atlasKey = "";

      this.target = { x: -0.5, y: 0.5 };
      this.eased = { x: -0.5, y: 0.5 };
      this.cells = [];
      this.verts = [];
      for (let i = 0; i < HANDLES; i++) {
        this.cells.push({ x: -0.5, y: 0.5 });
        this.verts.push({ x: -0.5, y: 0.5 });
      }

      this.hasPointer = false;
      this.sweepClock = 0;
      this.driftT = 0;
      this.alive = true;
      this.last = 0;

      if (typeof document !== "undefined" && document.fonts) {
        document.fonts.ready.then(() => {
          if (this.alive) this.atlasKey = "";
        }).catch(() => {});
      }

      this.bindEvents();
      this.startLoop();
    }

    drawFontPx() {
      return this.fontSpec.size * (this.boxW / REF_WIDTH);
    }

    resize() {
      this.boxW = Math.max(1, this.host.offsetWidth);
      this.boxH = Math.max(1, this.host.offsetHeight);
      this.dpr = Math.min(MAX_DPR, window.devicePixelRatio || 1);
      const w = Math.max(1, Math.round(this.boxW * this.dpr));
      const h = Math.max(1, Math.round(this.boxH * this.dpr));
      if (w === this.bufW && h === this.bufH) return;
      this.bufW = w;
      this.bufH = h;
      this.canvas.width = w;
      this.canvas.height = h;
    }

    rebuildAtlas() {
      const gl = this.gl;
      const px = Math.max(8, this.drawFontPx());
      const atlas = buildAtlas(this.text || " ", this.fontSpec, px, this.dpr);
      if (!atlas) return;

      this.atlasRatioW = Math.max(1e-4, atlas.cssW / px);
      this.atlasRatioH = Math.max(1e-4, atlas.cssH / px);

      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, atlas.canvas);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

      const cw = atlas.canvas.width;
      const ch = atlas.canvas.height;
      const pot = (cw & (cw - 1)) === 0 && (ch & (ch - 1)) === 0;

      if (this.isGL2 || pot) {
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }
    }

    snap(x, y, cw, ch) {
      const cx = Math.floor(x / cw);
      const cy = Math.floor(y / ch);
      const found = [];
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const px = (cx + i + 0.5) * cw;
          const py = (cy + j + 0.5) * ch;
          found.push({ x: px, y: py, d: Math.hypot(px - x, py - y) });
        }
      }
      found.sort((a, b) => a.d - b.d);
      for (let i = 0; i < HANDLES; i++) {
        this.cells[i].x = found[i + 1].x;
        this.cells[i].y = found[i + 1].y;
      }
    }

    bindEvents() {
      this.onMove = (e) => {
        this.hasPointer = true;
        const r = this.host.getBoundingClientRect();
        if (r.width <= 0 || r.height <= 0) return;
        this.target.x = (e.clientX - r.left) / r.width;
        this.target.y = 1 - (e.clientY - r.top) / r.height;
      };

      this.onLeave = () => {
        this.hasPointer = false;
      };

      this.host.addEventListener("pointermove", this.onMove);
      this.host.addEventListener("pointerleave", this.onLeave);

      this.ro = new ResizeObserver(() => {
        this.boxDirty = true;
      });
      this.ro.observe(this.host);
    }

    sync() {
      if (this.boxDirty) {
        this.boxDirty = false;
        this.resize();
      }
      const f = this.fontSpec;
      const key = [
        this.text,
        f.family,
        f.weight,
        f.style,
        f.letterSpacing,
        this.dpr,
        Math.ceil(Math.max(8, this.drawFontPx()) / 64),
      ].join("|");

      if (key !== this.atlasKey) {
        this.atlasKey = key;
        this.rebuildAtlas();
      }
    }

    step(dt) {
      const rate = Math.max(0, this.speed) / SPEED_REF;
      const cw = Math.max(0.01, this.hg.spread / 100);
      const ch = cw * CELL_ASPECT;
      const aspect = this.boxW / this.boxH;

      if (!this.hasPointer) {
        const band = (this.atlasRatioH * Math.max(8, this.drawFontPx())) / this.boxH;
        this.target.x += dt * SWEEP_RATE * rate;
        this.target.y = (1 - band) / 2 + SWEEP_BAND * band;
        if (this.target.x > 1.5) {
          this.target.x = -0.5;
          this.eased.x = -0.5;
        }
        this.sweepClock += dt;
        if (this.sweepClock >= RESNAP) {
          this.sweepClock = 0;
          this.snap(this.target.x * aspect, this.target.y, cw, ch);
        }
      } else {
        this.snap(this.target.x * aspect, this.target.y, cw, ch);
      }

      const damp = clamp((this.damping / 100) * DAMP_REF * dt, 0, 1);
      this.eased.x += (this.target.x - this.eased.x) * damp;
      this.eased.y += (this.target.y - this.eased.y) * damp;

      this.driftT += dt * rate;
      for (let i = 0; i < HANDLES; i++) {
        const c = this.cells[i];
        const sx = Math.round(c.x / cw - 0.5);
        const sy = Math.round(c.y / ch - 0.5);
        const h1 = fract(Math.sin(sx * 127.1 + sy * 311.7) * 43758.5453);
        const h2 = fract(Math.sin(sx * 269.5 + sy * 183.3) * 43758.5453);
        this.verts[i].x = c.x + DRIFT_X * cw * Math.sin(this.driftT * DRIFT_RATE + h1 * Math.PI * 2);
        this.verts[i].y = c.y + DRIFT_Y * ch * Math.sin(this.driftT * DRIFT_RATE_Y + h2 * Math.PI * 2);
      }
    }

    writeLabels() {
      const aspect = this.boxW / this.boxH;
      const half = this.hg.size / 2;
      for (let i = 0; i < HANDLES; i++) {
        const el = this.labelElements[i];
        if (!el) continue;
        const bx = this.verts[i].x / aspect;
        const by = this.verts[i].y;
        const gx = Math.round(clamp(bx * 100, 0, 100));
        const gy = Math.round(clamp(by * 100, 0, 100));
        el.style.transform = `translate(${bx * this.boxW - half}px, ${(1 - by) * this.boxH - half}px)`;
        el.style.opacity = String(LABEL_MAX);
        el.textContent = `[${gx}, ${gy}]`;
      }
    }

    draw() {
      const gl = this.gl;
      const tc = parseColor(this.textColor, [0.0, 0.949, 0.996, 1]); // #00f2fe
      const sc = parseColor(this.shade, [0.31, 0.675, 0.996, 1]); // #4facfe
      const ac = parseColor(this.accent, [0.0, 0.949, 0.996, 0.45]);

      gl.viewport(0, 0, this.bufW, this.bufH);
      gl.useProgram(this.prog);
      gl.uniform1i(this.U.map, 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.tex);
      gl.uniform2f(this.U.res, this.boxW, this.boxH);

      const px = Math.max(8, this.drawFontPx());
      gl.uniform2f(this.U.atlas, this.atlasRatioW * px, this.atlasRatioH * px);
      gl.uniform2f(this.U.ptr, this.eased.x, this.eased.y);
      gl.uniform1f(this.U.reach, Math.max(1, this.reach) / this.boxW);
      gl.uniform3f(this.U.text, tc[0], tc[1], tc[2]);
      gl.uniform3f(this.U.shade, sc[0], sc[1], sc[2]);
      gl.uniform4f(this.U.accent, ac[0], ac[1], ac[2], ac[3]);
      gl.uniform2f(this.U.v0, this.verts[0].x, this.verts[0].y);
      gl.uniform2f(this.U.v1, this.verts[1].x, this.verts[1].y);
      gl.uniform2f(this.U.v2, this.verts[2].x, this.verts[2].y);
      gl.uniform1f(this.U.half, this.hg.size / 2 / this.boxH);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    startLoop() {
      const frame = (now) => {
        if (!this.alive) return;
        const dt = this.last ? Math.min(0.1, (now - this.last) / 1000) : 0;
        this.last = now;

        this.sync();
        this.step(dt);
        this.writeLabels();
        this.draw();

        this.raf = requestAnimationFrame(frame);
      };

      const gate = () => {
        if (this.alive && !document.hidden) {
          if (!this.raf) {
            this.last = 0;
            this.raf = requestAnimationFrame(frame);
          }
        } else if (this.raf) {
          cancelAnimationFrame(this.raf);
          this.raf = 0;
        }
      };

      document.addEventListener("visibilitychange", gate);
      this.gate = gate;
      this.raf = requestAnimationFrame(frame);
    }

    destroy() {
      this.alive = false;
      if (this.raf) cancelAnimationFrame(this.raf);
      if (this.ro) this.ro.disconnect();
      if (this.gate) document.removeEventListener("visibilitychange", this.gate);
      this.host.removeEventListener("pointermove", this.onMove);
      this.host.removeEventListener("pointerleave", this.onLeave);
    }
  }

  // Initialize Wordmark Controller with DOM readiness check
  function bootWordmark() {
    const wordmarkEl = document.getElementById("vector-wordmark-host");
    if (wordmarkEl && !window.vectorWordmark) {
      window.vectorWordmark = new VectorWordmarkController(wordmarkEl, {
        text: "YOGESH B",
        fontSize: 140,
        fontWeight: "800",
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        textColor: "#00f2fe",
        shade: "#4facfe",
        accent: "rgba(0, 242, 254, 0.45)",
        reach: 280,
        speed: 50,
        damping: 60,
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootWordmark);
  } else {
    bootWordmark();
  }
})();
