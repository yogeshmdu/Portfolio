/**
 * Fluid Ambient Aura Canvas
 * Generates organic glowing gradient auras in Vibrant Coral Orange (#FF4B32)
 * and Cool Steel Grey (#929DA7) over Midnight Charcoal (#17191c) base.
 * Features smooth spring physics that gently track pointer movements.
 */

class FluidAuraCanvas {
  constructor(canvasId = 'fluid-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.mouse = {
      x: window.innerWidth * 0.7,
      y: window.innerHeight * 0.4,
      targetX: window.innerWidth * 0.7,
      targetY: window.innerHeight * 0.4
    };

    this.blobs = [];
    this.time = 0;
    this.animId = null;

    this.resize();
    this.initBlobs();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initBlobs() {
    // 4 atmospheric glowing orbs
    this.blobs = [
      {
        // Primary Vibrant Coral Orange Aura (interactive, follows mouse)
        baseX: this.width * 0.75,
        baseY: this.height * 0.45,
        x: this.width * 0.75,
        y: this.height * 0.45,
        vx: 0,
        vy: 0,
        radius: Math.min(this.width, this.height) * 0.55,
        colorInner: 'rgba(255, 75, 50, 0.38)',
        colorMid: 'rgba(255, 95, 70, 0.18)',
        colorOuter: 'rgba(255, 75, 50, 0)',
        speedX: 0.0008,
        speedY: 0.001,
        ampX: 120,
        ampY: 90,
        isInteractive: true
      },
      {
        // Cool Steel Grey Soft Mist Aura (drifts in top-left)
        baseX: this.width * 0.22,
        baseY: this.height * 0.28,
        x: this.width * 0.22,
        y: this.height * 0.28,
        vx: 0,
        vy: 0,
        radius: Math.min(this.width, this.height) * 0.45,
        colorInner: 'rgba(146, 157, 167, 0.28)',
        colorMid: 'rgba(146, 157, 167, 0.12)',
        colorOuter: 'rgba(146, 157, 167, 0)',
        speedX: 0.0006,
        speedY: 0.0008,
        ampX: 90,
        ampY: 70,
        isInteractive: false
      },
      {
        // Deep Midnight Charcoal & Radiant Coral Rim (bottom center)
        baseX: this.width * 0.5,
        baseY: this.height * 0.85,
        x: this.width * 0.5,
        y: this.height * 0.85,
        vx: 0,
        vy: 0,
        radius: Math.min(this.width, this.height) * 0.65,
        colorInner: 'rgba(255, 75, 50, 0.22)',
        colorMid: 'rgba(146, 157, 167, 0.08)',
        colorOuter: 'rgba(23, 25, 28, 0)',
        speedX: 0.0005,
        speedY: 0.0007,
        ampX: 140,
        ampY: 80,
        isInteractive: false
      },
      {
        // Secondary Coral Flare (ambient breath)
        baseX: this.width * 0.85,
        baseY: this.height * 0.82,
        x: this.width * 0.85,
        y: this.height * 0.82,
        vx: 0,
        vy: 0,
        radius: Math.min(this.width, this.height) * 0.4,
        colorInner: 'rgba(255, 95, 75, 0.26)',
        colorMid: 'rgba(255, 75, 50, 0.09)',
        colorOuter: 'rgba(255, 75, 50, 0)',
        speedX: 0.0012,
        speedY: 0.0009,
        ampX: 80,
        ampY: 60,
        isInteractive: false
      }
    ];
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.initBlobs();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        this.mouse.targetX = e.touches[0].clientX;
        this.mouse.targetY = e.touches[0].clientY;
      }
    }, { passive: true });
  }

  animate() {
    this.time += 1;

    // Smooth spring interpolation for mouse tracker
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.045;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.045;

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.blobs.length; i++) {
      const b = this.blobs[i];

      // Natural harmonic drifting
      const driftX = Math.sin(this.time * b.speedX) * b.ampX;
      const driftY = Math.cos(this.time * b.speedY) * b.ampY;

      if (b.isInteractive) {
        // Blend mouse target influence with natural drift
        const targetX = this.mouse.x * 0.6 + (b.baseX + driftX) * 0.4;
        const targetY = this.mouse.y * 0.6 + (b.baseY + driftY) * 0.4;
        b.x += (targetX - b.x) * 0.05;
        b.y += (targetY - b.y) * 0.05;
      } else {
        b.x = b.baseX + driftX;
        b.y = b.baseY + driftY;
      }

      // Radial gradient bloom
      const grad = this.ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
      grad.addColorStop(0, b.colorInner);
      grad.addColorStop(0.45, b.colorMid);
      grad.addColorStop(1, b.colorOuter);

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.fluidAuraCanvas = new FluidAuraCanvas('fluid-canvas');
});

