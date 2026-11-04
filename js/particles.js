/**
 * Interactive Particle Constellation Canvas
 * Renders glowing nodes in Vibrant Coral Orange (#FF4B32) and Cool Steel Grey (#929DA7)
 * that connect dynamically and respond organically to cursor movement.
 */

class ParticleConstellation {
  constructor(canvasId = 'canvas-bg') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 55;
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 170 };

    this.resize();
    this.init();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    if (this.width < 768) {
      this.particleCount = 28;
      this.maxDistance = 100;
    } else {
      this.particleCount = 58;
      this.maxDistance = 145;
    }
  }

  init() {
    this.particles = [];
    const colorChoices = [
      'rgba(255, 75, 50,',    // Vibrant Coral Orange
      'rgba(146, 157, 167,',  // Cool Steel Grey
      'rgba(255, 120, 100,',  // Soft Coral Tint
      'rgba(255, 255, 255,'   // Clean White Star
    ];

    for (let i = 0; i < this.particleCount; i++) {
      const rand = Math.random();
      let color = colorChoices[0];
      if (rand < 0.45) color = colorChoices[0];       // 45% Coral
      else if (rand < 0.8) color = colorChoices[1];  // 35% Steel Grey
      else if (rand < 0.92) color = colorChoices[2]; // 12% Light Coral
      else color = colorChoices[3];                  // 8% White

      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65,
        radius: Math.random() * 2 + 1,
        color: color
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.init();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.height) p.vy *= -1;

      // Mouse repulsion/interaction
      if (this.mouse.x !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const dirX = (dx / dist) * force * 1.6;
          const dirY = (dy / dist) * force * 1.6;
          p.x -= dirX;
          p.y -= dirY;
        }
      }

      // Draw particle node
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color + '0.8)';
      this.ctx.fill();

      // Connect with neighboring particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const alpha = (1 - dist / this.maxDistance) * 0.22;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          // Filament line
          this.ctx.strokeStyle = `rgba(146, 157, 167, ${alpha})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.particleConstellation = new ParticleConstellation('canvas-bg');
});
