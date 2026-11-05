/**
 * Audio Engine: Web Audio API Micro-Interactions + Local Offline Background Music
 * Background Music Track: "Evolution" by AShamaluevMusic
 * Stored locally in repository at: assets/audio/background-music.mp3
 * Fully offline, zero external links or network dependencies.
 */

class SoundEngine {
  constructor() {
    this.enabled = localStorage.getItem('sound_enabled') === 'true';
    this.ctx = null;
    this.bgAudio = null;
    this.bgVolume = 0.35; // 35% comfortable ambient volume

    this.initAudioElement();
    this.setupGestureUnlock();
  }

  /* Cache the local background audio element */
  initAudioElement() {
    const bindEl = () => {
      this.bgAudio = document.getElementById('local-bg-audio');
      if (this.bgAudio) {
        this.bgAudio.volume = this.bgVolume;
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', bindEl);
    } else {
      bindEl();
    }
  }

  /* First-gesture unlock to comply with browser autoplay policies when sound was previously enabled */
  setupGestureUnlock() {
    if (this.enabled) {
      const unlockAudio = () => {
        if (this.enabled) {
          this.init();
          this.playMusic();
        }
        window.removeEventListener('pointerdown', unlockAudio);
        window.removeEventListener('keydown', unlockAudio);
      };
      window.addEventListener('pointerdown', unlockAudio, { passive: true });
      window.addEventListener('keydown', unlockAudio, { passive: true });
    }
  }

  /* Web Audio Context for micro-interaction sounds */
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /* Play local background music from repository */
  playMusic() {
    if (!this.enabled) return;

    if (!this.bgAudio) {
      this.bgAudio = document.getElementById('local-bg-audio');
    }

    if (this.bgAudio) {
      this.bgAudio.volume = this.bgVolume;
      const playPromise = this.bgAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Awaiting user gesture
        });
      }
    }
  }

  /* Pause local background music */
  pauseMusic() {
    if (!this.bgAudio) {
      this.bgAudio = document.getElementById('local-bg-audio');
    }

    if (this.bgAudio) {
      try {
        this.bgAudio.pause();
      } catch (e) {}
    }
  }

  /* Master Sound & Music Toggle */
  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('sound_enabled', this.enabled);

    if (this.enabled) {
      this.init();
      this.playChime();
      this.playMusic();
    } else {
      this.pauseMusic();
    }

    return this.enabled;
  }

  /* UI Click Sound FX (Sine wave micro-blip) */
  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  /* Activation Chime (Ascending triad: C5, E5, G5) */
  playChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99]; // C5, E5, G5

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0.03, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.25);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.25);
      });
    } catch (e) {}
  }

  /* Pop Sound FX (Triangle wave bounce) */
  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(250, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch (e) {}
  }

  /* Mechanical ceiling lamp pull-cord switch (Dual tactile click) */
  playLampSwitch() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [0, 0.042].forEach((offset, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(idx === 0 ? 820 : 540, now + offset);
        osc.frequency.exponentialRampToValueAtTime(140, now + offset + 0.038);

        gain.gain.setValueAtTime(0.07, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, now + offset + 0.038);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + offset);
        osc.stop(now + offset + 0.038);
      });
    } catch (e) {}
  }
}

window.soundEngine = new SoundEngine();
