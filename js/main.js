/**
 * Main Application Orchestrator - Updated with VSplash Tech Labs Credentials
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
      'Full-Stack Developer',
      'Software Engineer',
      'React.js & Node.js',
      'PHP & Laravel Systems',
      '5+ Years Experience'
    ];

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.initTypewriter();
    this.initHeroWorkstation();
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
        ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  toggleTheme() {
    window.soundEngine?.playClick();
    const nextTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
    this.showToast(`Switched to ${nextTheme === 'dark' ? 'Obsidian Dark' : 'Luxe Light'} mode`);
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
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;
  }

  /* Background Mode Switcher (Constellation vs Ambient Video) */
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

  /* Interactive Architecture & Code Workstation Controller */
  initHeroWorkstation() {
    const workstation = document.getElementById('hero-workstation');
    const card = document.getElementById('workstation-card');
    const codeDisplay = document.getElementById('code-display');
    const fileTitle = document.getElementById('active-file-title');
    const btnSim = document.getElementById('btn-run-simulation');
    const simDrawer = document.getElementById('simulation-output');
    const btnCloseSim = document.getElementById('btn-close-sim');

    if (!workstation || !card || !codeDisplay) return;

    // Code files repository with syntax highlighting
    const snippets = {
      aircalibre: {
        title: 'AirCalibreERP.ts',
        code: `<span class="syn-comment">// Air Calibre Systems — Cleanroom Calculation Engine</span>
<span class="syn-kw">export class</span> <span class="syn-type">CleanroomAuditService</span> <span class="syn-kw">implements</span> <span class="syn-type">IAudit</span> {
  <span class="syn-kw">async</span> <span class="syn-fn">calculateVelocity</span>(<span class="syn-prop">grid</span>: <span class="syn-type">number[]</span>): <span class="syn-type">Promise&lt;Result&gt;</span> {
    <span class="syn-kw">const</span> <span class="syn-prop">avg</span> = grid.<span class="syn-fn">reduce</span>((<span class="syn-prop">a</span>, <span class="syn-prop">b</span>) =&gt; a + b, <span class="syn-num">0</span>) / grid.<span class="syn-prop">length</span>;
    <span class="syn-kw">const</span> <span class="syn-prop">compliant</span> = avg &gt;= <span class="syn-num">0.45</span> &amp;&amp; avg &lt;= <span class="syn-num">0.55</span>;
    
    <span class="syn-kw">await</span> <span class="syn-prop">this</span>.<span class="syn-prop">db</span>.<span class="syn-fn">saveReport</span>({
      <span class="syn-prop">auditId</span>: <span class="syn-str">"ACS-2026-VAL"</span>,
      <span class="syn-prop">status</span>: compliant ? <span class="syn-str">"PASS"</span> : <span class="syn-str">"RE_CALIBRATE"</span>,
      <span class="syn-prop">velocity</span>: avg,
      <span class="syn-prop">timestamp</span>: <span class="syn-kw">new</span> <span class="syn-type">Date</span>().<span class="syn-fn">toISOString</span>()
    });
    <span class="syn-kw">return</span> { <span class="syn-prop">success</span>: <span class="syn-kw">true</span>, <span class="syn-prop">verified</span>: compliant };
  }
}`
      },
      fooddelivery: {
        title: 'FoodDeliveryAPI.js',
        code: `<span class="syn-comment">// Madurai Syead Meats — Express.js & Neon REST API</span>
<span class="syn-prop">router</span>.<span class="syn-fn">post</span>(<span class="syn-str">'/api/v1/orders/create'</span>, <span class="syn-prop">authGuard</span>, <span class="syn-kw">async</span> (<span class="syn-prop">req</span>, <span class="syn-prop">res</span>) =&gt; {
  <span class="syn-kw">const</span> { <span class="syn-prop">customerId</span>, <span class="syn-prop">items</span>, <span class="syn-prop">slot</span> } = req.<span class="syn-prop">body</span>;
  <span class="syn-kw">const</span> <span class="syn-prop">dbClient</span> = <span class="syn-kw">await</span> neonPool.<span class="syn-fn">connect</span>();
  
  <span class="syn-kw">try</span> {
    <span class="syn-kw">await</span> dbClient.<span class="syn-fn">query</span>(<span class="syn-str">'BEGIN'</span>);
    <span class="syn-kw">const</span> <span class="syn-prop">order</span> = <span class="syn-kw">await</span> dbClient.<span class="syn-fn">query</span>(
      <span class="syn-str">'INSERT INTO orders (customer_id, eta) VALUES ($1, $2) RETURNING *'</span>,
      [customerId, <span class="syn-str">'30 MINS'</span>]
    );
    <span class="syn-kw">await</span> dbClient.<span class="syn-fn">query</span>(<span class="syn-str">'COMMIT'</span>);
    <span class="syn-kw">return</span> res.<span class="syn-fn">status</span>(<span class="syn-num">201</span>).<span class="syn-fn">json</span>({ <span class="syn-prop">status</span>: <span class="syn-str">'confirmed'</span>, <span class="syn-prop">order</span>: order.<span class="syn-prop">rows</span>[<span class="syn-num">0</span>] });
  } <span class="syn-kw">catch</span> (<span class="syn-prop">err</span>) {
    <span class="syn-kw">await</span> dbClient.<span class="syn-fn">query</span>(<span class="syn-str">'ROLLBACK'</span>);
    <span class="syn-kw">return</span> res.<span class="syn-fn">status</span>(<span class="syn-num">500</span>).<span class="syn-fn">json</span>({ <span class="syn-prop">error</span>: <span class="syn-str">'Order creation failed'</span> });
  }
});`
      },
      schema: {
        title: 'NeonPostgres.sql',
        code: `<span class="syn-comment">-- Neon Serverless PostgreSQL Schema • Cloud Architecture</span>
<span class="syn-kw">CREATE TABLE IF NOT EXISTS</span> <span class="syn-type">public.enterprise_deployments</span> (
  <span class="syn-prop">id</span> <span class="syn-type">UUID PRIMARY KEY DEFAULT</span> <span class="syn-fn">gen_random_uuid</span>(),
  <span class="syn-prop">service_name</span> <span class="syn-type">VARCHAR(120) NOT NULL</span>,
  <span class="syn-prop">stack</span> <span class="syn-type">VARCHAR(80) DEFAULT</span> <span class="syn-str">'React + Node + PostgreSQL'</span>,
  <span class="syn-prop">latency_ms</span> <span class="syn-type">INTEGER DEFAULT</span> <span class="syn-num">18</span>,
  <span class="syn-prop">cloud_provider</span> <span class="syn-type">VARCHAR(50) DEFAULT</span> <span class="syn-str">'Render Cloud'</span>,
  <span class="syn-prop">created_at</span> <span class="syn-type">TIMESTAMPTZ DEFAULT</span> <span class="syn-fn">NOW</span>()
);

<span class="syn-comment">-- Sub-millisecond indexed audit retrieval</span>
<span class="syn-kw">CREATE INDEX</span> <span class="syn-fn">idx_enterprise_service</span> 
  <span class="syn-kw">ON</span> <span class="syn-type">public.enterprise_deployments</span>(<span class="syn-prop">service_name</span>);`
      }
    };

    // Load initial code
    codeDisplay.innerHTML = snippets.aircalibre.code;

    // Tab switching
    const tabs = document.querySelectorAll('.workstation-tabs .tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        window.soundEngine?.playClick();
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const key = tab.getAttribute('data-tab');
        if (snippets[key]) {
          codeDisplay.innerHTML = snippets[key].code;
          if (fileTitle) fileTitle.textContent = snippets[key].title;
          this.showToast(`Inspecting ${snippets[key].title}`);
        }
      });
    });

    // Run Simulation Button
    if (btnSim && simDrawer) {
      btnSim.addEventListener('click', () => {
        window.soundEngine?.playPop();
        simDrawer.classList.toggle('open');
        this.showToast('Executing live endpoint simulation... ⚡');
      });
    }

    if (btnCloseSim && simDrawer) {
      btnCloseSim.addEventListener('click', () => {
        simDrawer.classList.remove('open');
      });
    }

    // 3D Parallax Tilt on Cursor Hover
    workstation.addEventListener('mousemove', (e) => {
      const rect = workstation.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotX = -y * 12;
      const rotY = x * 12;
      card.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    workstation.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
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
    const deletingSpeed = 35;
    const pauseTime = 2000;

    const tick = () => {
      const currentPhrase = this.typewriterPhrases[phraseIndex];

      if (isDeleting) {
        charIndex--;
        target.textContent = currentPhrase.substring(0, charIndex);
      } else {
        charIndex++;
        target.textContent = currentPhrase.substring(0, charIndex);
      }

      let delta = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentPhrase.length) {
        delta = pauseTime;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % this.typewriterPhrases.length;
        delta = 350;
      }

      setTimeout(tick, delta);
    };

    tick();
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

    const interactiveSelectors = 'a, button, input, textarea, .project-card, .skill-card, .exp-card, .filter-btn';
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
      threshold: 0.15,
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
        if (scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
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
  window.portfolioMain = new PortfolioApp();
});
