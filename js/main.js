/**
 * Main Application Orchestrator
 * Themed with Midnight Charcoal (#17191c), Cool Steel Grey (#929DA7), and Vibrant Coral Orange (#FF4B32).
 */

class PortfolioApp {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'dark';
    this.bgMode = localStorage.getItem('bg_mode') || 'canvas';
    this.soundBtn = document.getElementById('sound-toggle-btn');
    this.themeBtn = document.getElementById('theme-toggle-btn');
    this.mobileToggle = document.getElementById('mobile-menu-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.toast = document.getElementById('toast-notice');
    this.toastText = document.getElementById('toast-text');

    this.typewriterPhrases = [
      'Full-Stack Architect',
      'Software Engineer (5+ Yrs)',
      'Enterprise ERP Portals',
      'React.js & Node.js SPAs',
      'PHP & Laravel Systems',
      'GoDaddy API Automation'
    ];

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.initTypewriter();
    this.initHeroPortrait();
    this.initMaduraiClock();
    this.initCustomCursor();
    this.initScrollReveal();
    this.initScrollSpy();
    this.initBackgroundSwitcher();
    this.bindEvents();
    this.initSoundButton();
  }

  /* Theme Management */
  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (this.themeBtn) {
      this.themeBtn.innerHTML = theme === 'dark'
        ? `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  toggleTheme() {
    window.soundEngine?.playClick();
    const nextTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
    this.showToast(`Switched to ${nextTheme === 'dark' ? 'Midnight Charcoal' : 'Cool Steel Luxe'} mode`);
  }

  /* Sound Control */
  initSoundButton() {
    if (!this.soundBtn) return;
    const isEnabled = window.soundEngine?.enabled;
    this.updateSoundIcon(isEnabled);

    this.soundBtn.addEventListener('click', () => {
      const state = window.soundEngine?.toggle();
      this.updateSoundIcon(state);
      this.showToast(state ? 'Sound FX Enabled 🔊' : 'Sound FX Muted 🔇');
    });
  }

  updateSoundIcon(enabled) {
    if (!this.soundBtn) return;
    this.soundBtn.innerHTML = enabled
      ? `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`
      : `<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  }

  /* Background Mode Switcher (Canvas vs Video) */
  initBackgroundSwitcher() {
    const canvasBtn = document.getElementById('bg-btn-canvas');
    const videoBtn = document.getElementById('bg-btn-video');
    const videoBackdrop = document.getElementById('video-backdrop');

    const setMode = (mode) => {
      this.bgMode = mode;
      localStorage.setItem('bg_mode', mode);

      if (mode === 'video') {
        videoBackdrop?.classList.add('active');
        const v = videoBackdrop?.querySelector('video');
        if (v && v.paused) v.play().catch(() => {});
        videoBtn?.classList.add('active');
        canvasBtn?.classList.remove('active');
      } else {
        videoBackdrop?.classList.remove('active');
        canvasBtn?.classList.add('active');
        videoBtn?.classList.remove('active');
      }
    };

    if (canvasBtn) {
      canvasBtn.addEventListener('click', () => {
        window.soundEngine?.playClick();
        setMode('canvas');
      });
    }

    if (videoBtn) {
      videoBtn.addEventListener('click', () => {
        window.soundEngine?.playClick();
        setMode('video');
      });
    }

    setMode(this.bgMode);
  }

  /* Interactive Hero Portrait with 3D Mouse Parallax Tilt */
  initHeroPortrait() {
    const host = document.getElementById('hero-visual-host');
    const card = document.getElementById('hero-portrait-card');
    if (!host || !card) return;

    const badges = card.querySelectorAll('.floating-badge');
    const glow = card.querySelector('.portrait-coral-glow');

    host.addEventListener('mousemove', (e) => {
      const rect = host.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = -y * 14;
      const rotY = x * 14;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;

      // Subtle parallax on telemetry badges
      badges.forEach((badge, index) => {
        const factor = (index + 1) * 8;
        const bx = -x * factor;
        const by = -y * factor;
        badge.style.transform = `translate3d(${bx.toFixed(1)}px, ${by.toFixed(1)}px, 20px)`;
      });

      if (glow) {
        glow.style.transform = `translate3d(${(-x * 25).toFixed(1)}px, ${(-y * 25).toFixed(1)}px, 0) scale(1.1)`;
      }
    });

    host.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      badges.forEach(badge => {
        badge.style.transform = 'translate3d(0, 0, 0)';
      });
      if (glow) {
        glow.style.transform = 'translate3d(0, 0, 0) scale(1)';
      }
    });

    card.addEventListener('click', () => {
      window.soundEngine?.playPop();
      this.showToast('Full Stack Architect • 5+ Years Experience 🚀');
    });
  }

  /* Typewriter Headline Effect */
  initTypewriter() {
    const target = document.getElementById('typewriter-target');
    if (!target) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 70;
    const deletingSpeed = 40;
    const pauseDelay = 1800;

    const type = () => {
      const currentPhrase = this.typewriterPhrases[phraseIndex];

      if (isDeleting) {
        target.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        target.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, pauseDelay);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % this.typewriterPhrases.length;
        setTimeout(type, 350);
      } else {
        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    setTimeout(type, 500);
  }

  /* Madurai Real-Time Clock & Greeting */
  initMaduraiClock() {
    const clockEl = document.getElementById('madurai-clock');
    const greetingEl = document.getElementById('madurai-greeting');
    if (!clockEl) return;

    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat([], options);
      clockEl.textContent = formatter.format(now) + ' IST';

      const hourFormatter = new Intl.DateTimeFormat([], { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false });
      const currentHour = parseInt(hourFormatter.format(now), 10);

      let greeting = 'Good evening from Madurai 🌆';
      if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good morning from Madurai 🌅';
      } else if (currentHour >= 12 && currentHour < 17) {
        greeting = 'Good afternoon from Madurai ☀️';
      } else if (currentHour >= 17 && currentHour < 21) {
        greeting = 'Good evening from Madurai 🌆';
      } else {
        greeting = 'Late night engineering in Madurai 🌙';
      }

      if (greetingEl) {
        greetingEl.textContent = greeting;
      }
    };

    updateTime();
    setInterval(updateTime, 1000);
  }

  /* Custom Interactive Cursor Follower */
  initCustomCursor() {
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');
    if (!dot || !outline) return;

    window.addEventListener('mousemove', (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, { duration: 250, fill: 'forwards' });
    });

    const interactiveSelectors = 'a, button, input, textarea, .project-card, .discipline-card, .skill-card, .exp-card, .filter-btn, .hero-portrait-card';
    document.querySelectorAll(interactiveSelectors).forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-hover');
      });
    });
  }

  /* Scroll Reveal via IntersectionObserver */
  initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }

  /* Navbar Scroll Spy & Header Blur */
  initScrollSpy() {
    const header = document.querySelector('.site-header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;

      if (header) {
        if (scrollY > 40) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 130;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });
  }

  /* Toast Notification */
  showToast(message, duration = 3000) {
    if (!this.toast || !this.toastText) return;
    this.toastText.textContent = message;
    this.toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.toast.classList.remove('show');
    }, duration);
  }

  /* Event Handlers */
  bindEvents() {
    if (this.themeBtn) {
      this.themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    if (this.mobileToggle && this.navMenu) {
      this.mobileToggle.addEventListener('click', () => {
        window.soundEngine?.playClick();
        this.navMenu.classList.toggle('open');
      });

      this.navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          this.navMenu.classList.remove('open');
        });
      });
    }

    // Copy to clipboard triggers
    document.querySelectorAll('.copy-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.soundEngine?.playClick();
        const textToCopy = btn.getAttribute('data-copy');
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            this.showToast(`Copied to clipboard: ${textToCopy} 📋`);
          }).catch(() => {
            this.showToast(`Failed to copy: ${textToCopy}`);
          });
        }
      });
    });

    // Contact Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        window.soundEngine?.playPop();

        const name = document.getElementById('form-name')?.value.trim();
        const email = document.getElementById('form-email')?.value.trim();
        const subject = document.getElementById('form-subject')?.value.trim() || 'Software Engineer Opportunity';
        const message = document.getElementById('form-message')?.value.trim();

        if (!name || !email || !message) {
          this.showToast('Please fill in all required fields.');
          return;
        }

        const mailtoLink = `mailto:yogesh0398@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${subject} - from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.open(mailtoLink, '_blank');
        this.showToast('Opening your default mail client to send email! 🚀');
        contactForm.reset();
      });
    }

    // Skills filter tabs
    const skillFilters = document.querySelectorAll('.skill-filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');
    skillFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundEngine?.playClick();
        skillFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.getAttribute('data-category');
        skillCards.forEach(card => {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Back to Top button
    const backToTopBtn = document.getElementById('footer-back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.soundEngine?.playClick();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.portfolioApp = new PortfolioApp();
});
