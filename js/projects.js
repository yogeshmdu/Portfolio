/**
 * Projects Engine - Idea-Wise Architecture & Verified Deployments
 * Portfolio of Yogesh B — Full Stack Architect & Software Engineer.
 */

const portfolioProjects = [
  {
    id: 'food-delivery-app',
    title: 'Food Delivery Application — Madurai Syead Meats',
    company: 'Madurai Syead Meats',
    category: 'react',
    categoryLabel: 'React Native & Node.js',
    tagline: 'On-demand meat delivery platform with live GPS tracking, Google Auth & Neon PostgreSQL',
    image: 'assets/images/project-food-delivery.jpg',
    sliderScreens: [
      {
        title: 'Customer Authentication',
        badge: '1. Secure Auth & Google Sign-in',
        image: 'assets/images/project-food-delivery-auth.png'
      },
      {
        title: 'Fresh Cuts Storefront',
        badge: '2. Dynamic Catalog & Smart Cart',
        image: 'assets/images/project-food-delivery-home.png'
      },
      {
        title: 'Live GPS Tracking',
        badge: '3. Real-Time Courier Route Tracking',
        image: 'assets/images/project-food-delivery-track.png'
      }
    ],
    liveUrl: 'https://food-delivery-app-1-ufhh.onrender.com/#/home',
    githubUrl: null,
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Neon DB', 'Live GPS Tracking', 'Google Auth', 'Render', 'Antigravity IDE'],
    idea: 'A mobile-first on-demand meat and food delivery platform for Madurai Syead Meats, engineered to streamline hygienic meat ordering with Google OAuth sign-in, dynamic product cataloging, and real-time GPS courier route tracking.',
    problem: 'Local meat purveyors faced heavy phone-order bottlenecks, lack of digital catalog visibility for daily fresh cuts, and customer uncertainty regarding order dispatch and estimated delivery time.',
    solution: 'Engineered a modern cross-platform application with encrypted Google/credentials authentication, dynamic category filtering (Chicken, Mutton, Fish, Eggs), real-time cart state management, and a dedicated live GPS tracking view displaying delivery partner status, vehicle details, and direct dispatch calling.',
    impact: 'Deployed live on Render with serverless Neon DB, delivering sub-20ms query latency, automated 5-stage order status progression, and seamless multi-channel ordering.',
    features: [
      'Unified 3-tier mobile flow: Secure Authentication, Interactive Catalog, and Live GPS Tracking',
      'Google OAuth & encrypted credentials sign-in with fast guest checkout option',
      'Dynamic fresh meat inventory with weight-based pricing (500g, 1kg) and instant cart management',
      'Real-time GPS order tracking map with live distance route and courier assignment (Murugan K., 4.9★)',
      '5-stage live order pipeline: Placed ➔ Accepted ➔ Packing ➔ On the way ➔ Delivered',
      'Direct in-app one-tap phone calling and WhatsApp triggers for store and delivery partner',
      'Serverless PostgreSQL database persistence hosted on Neon with continuous Render deployment',
      'Developed with Antigravity IDE and modern AI-assisted engineering tools'
    ],
    architecture: 'React Native / React.js frontend, Node.js & Express REST API with JWT auth, Neon serverless PostgreSQL, OpenStreetMap / route telemetry integration, hosted on Render cloud platform.',
    screenshots: [
      { title: '1. Secure Authentication', image: 'assets/images/project-food-delivery-auth.png', caption: 'Google OAuth & Credential Sign-in' },
      { title: '2. Fresh Cuts Catalog', image: 'assets/images/project-food-delivery-home.png', caption: 'Dynamic Category Ordering & Cart' },
      { title: '3. Live GPS Order Tracking', image: 'assets/images/project-food-delivery-track.png', caption: 'Real-Time Courier Route & Dispatch' }
    ]
  },
  {
    id: 'world-travel-budget',
    title: 'World Travel Budget',
    company: 'Travel Website',
    category: 'react',
    categoryLabel: 'React & Bootstrap',
    tagline: 'Global travel destination exploration & budget planning platform',
    image: 'assets/images/project-travel-budget.jpg',
    video: 'assets/video/travel-video.mp4',
    liveUrl: 'https://worldtravelbudget.netlify.app/',
    githubUrl: null,
    tags: ['React.js', 'Bootstrap 5.3', 'Video UI', 'Responsive UI', 'Netlify'],
    idea: 'This is a travel website built using React.js and styled with Bootstrap 5.3 for a sleek, responsive design. The platform offers an immersive experience for travelers exploring famous destinations across the globe with interactive and user-friendly features.',
    problem: 'Travelers often encounter cluttered, confusing travel sites that make discovering destination itineraries and planning travel budgets overwhelming and disjointed.',
    solution: 'Engineered an intuitive, video-enhanced travel portal with responsive Bootstrap 5.3 layouts, dynamic destination showcases, and interactive exploration features.',
    impact: 'Deployed live on Netlify with sub-second page loads, immersive ambient video backgrounds, and responsive layouts across all devices.',
    features: [
      'High-definition video showcase capturing world travel hotspots',
      'Built with React.js component architecture for swift client-side navigation',
      'Styled with modern Bootstrap 5.3 for a sleek, mobile-first responsive design',
      'Intuitive travel budget planning and itinerary discovery features',
      'Fast, continuous cloud deployment hosted live on Netlify'
    ],
    architecture: 'React.js component-based architecture, Bootstrap 5.3 responsive layout system, HTML5 video integration, and optimized cloud hosting on Netlify.'
  },
  {
    id: 'air-calibre-web',
    title: 'Enterprise Web Portal',
    company: 'Live Web Portal',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP',
    tagline: 'Comprehensive ERP validation portal for cleanroom & HVAC compliance audits',
    image: 'assets/images/project-aircalibre-web.jpg',
    liveUrl: 'https://website-of-acs.netlify.app/',
    githubUrl: null,
    tags: ['Core PHP', 'Bootstrap 5', 'JavaScript ES6+', 'MySQL', 'ERP Workflows'],
    idea: 'Digitize paper-heavy HVAC & cleanroom compliance testing into an automated, role-based cloud ERP accessible by field engineers and corporate clients in real time.',
    problem: 'Traditional validation audits relied on manual spreadsheets, error-prone data re-entry, and disjointed client communication, causing significant turnaround delays.',
    solution: 'Designed and engineered an integrated ERP web architecture with modular role-based authentication, real-time stage tracking, and seamless validation workflow integration.',
    impact: 'Reduced audit certificate generation turnaround by 75% and eliminated cross-team data discrepancies for 500+ client inspections.',
    features: [
      'Role-based access control for validation engineers, auditors, and clients',
      'Dynamic project workflow milestones and inspection scheduling',
      'Automated form validations matching international cleanroom standards',
      'Direct synchronization with relational MySQL database schemas',
      'Responsive interface optimized for on-field tablet and laptop audits'
    ],
    architecture: 'Core PHP backend with procedural and OOP services, normalized MySQL database, and responsive Bootstrap 5 client interface with AJAX asynchronous actions.'
  },
  {
    id: 'air-calibre-module',
    title: 'Reports Module Website & Validation Engine',
    company: 'Reports Module Website',
    category: 'enterprise',
    categoryLabel: 'Reports Engine',
    tagline: 'Advanced report calculation engine and compliance document archive website',
    image: 'assets/images/project-aircalibre-module.jpg',
    liveUrl: 'http://validationreportmodule.netlify.app',
    githubUrl: null,
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'PDF Engine', 'Calculations'],
    idea: 'Replace manual spreadsheet calculations with a certified arithmetic reports module that converts raw air velocity and particle metrics into verified PDF audit certificates.',
    problem: 'Generating multi-page audit certificates required tedious manual calculations of airflow velocity, HEPA filter efficiency, and particle counts, consuming hours per test.',
    solution: 'Developed an automated calculation reports engine with pre-engineered audit templates that process raw field measurements into formatted, printable validation reports in seconds.',
    impact: 'Automated 100% of complex airflow and particle count math formulas with sub-second report generation and zero calculation errors.',
    features: [
      'Extensive library of pre-built validation and compliance certificate templates',
      'Automated arithmetic engine calculating airflow volume, air changes/hour, and tolerances',
      'Instant report rendering and formatted document generation',
      'Historical report repository with quick search and audit-log trail',
      'Secure data validation preventing out-of-spec or missing parameter submissions'
    ],
    architecture: 'Core PHP mathematical computation routines, dynamic DOM template hydration, relational audit persistence, and fast PDF-ready output formatting.'
  },
  {
    id: 'imdb-clone',
    title: 'IMDb Movie Discovery Hub',
    company: 'Entertainment Website',
    category: 'react',
    categoryLabel: 'React & API',
    tagline: 'High-speed movie exploration web application powered by RapidAPI',
    image: 'assets/images/project-imdb.png',
    liveUrl: null,
    githubUrl: null,
    tags: ['React.js', 'RapidAPI', 'Tailwind CSS', 'Fetch API', 'Component Architecture'],
    idea: 'Create an ad-free, blazing-fast cinema discovery platform that indexes cast filmographies, soundtrack vocalists, and live trailer streaming with debounced search.',
    problem: 'Movie enthusiasts need a fast, distraction-free interface to discover movies, inspect artist filmographies, and check user ratings without heavy ad bloat.',
    solution: 'Engineered a modern single-page React app with debounced live search, modular card layouts, genre filtering, and responsive modal summaries.',
    impact: 'Delivered instantaneous client-side filtering across thousands of titles with debounced API caching.',
    features: [
      'Real-time dynamic search bar with query debouncing',
      'Live RapidAPI endpoint integration with error boundary fallbacks',
      'Detailed artist credits: directors, primary cast, and soundtrack singers',
      'Genre-based carousel browsing and trending movie spotlight',
      'Smooth layout transitions with modern CSS grid styling'
    ],
    architecture: 'React functional components with useState, useEffect, and custom hooks for network caching, styled with responsive utilities.'
  },
  {
    id: 'food-ordering-platform',
    title: 'Food Ordering & Culinary Web App',
    company: 'Food Platform',
    category: 'react',
    categoryLabel: 'React & Redux',
    tagline: 'Interactive culinary ordering platform with live cart state & category filtering',
    image: 'assets/images/project-swiggy-travel.jpg',
    liveUrl: null,
    githubUrl: null,
    tags: ['React.js', 'Redux', 'Tailwind CSS', 'REST API', 'Cart State'],
    idea: 'Build an ultra-responsive, card-driven food ordering and restaurant discovery platform with dynamic culinary categories, live search, and seamless cart state persistence.',
    problem: 'Traditional food web interfaces often experience latency during rapid cart mutations, category switching, and real-time order calculations.',
    solution: 'Developed a modular React single-page application with central Redux state handling instant item additions, quantity recalculations, and responsive menu grid layouts.',
    impact: 'Sub-16ms UI updates with instant state synchronization and fluid mobile-first ordering workflows.',
    features: [
      'Interactive culinary catalog showcasing regional cuisines, chef specials, and ingredient breakdowns',
      'Real-time cart state management with instant quantity increments and discount calculations',
      'Debounced dietary and category filters (Spicy, Vegetarian, Specials)',
      'High-resolution culinary photography showcase with smooth hover elevations',
      'Fully responsive desktop, tablet, and mobile interface'
    ],
    architecture: 'React.js with functional components, centralized Redux state management, and modern CSS utility layouts.'
  },
  {
    id: 'explore-madurai',
    title: 'Explore Madurai Cultural & Tourism Guide',
    company: 'Tourism Website',
    category: 'culture',
    categoryLabel: 'Tourism Showcase',
    tagline: 'Interactive heritage and tourism platform celebrating the cultural capital of Tamil Nadu',
    image: 'assets/images/project-madurai.jpg',
    liveUrl: 'http://exploremadurai.netlify.app',
    githubUrl: null,
    tags: ['Bootstrap 5', 'HTML5', 'CSS3', 'JavaScript ES6+', 'Interactive Maps'],
    idea: 'Preserve and celebrate the historic heritage, ancient temples, vibrant street food, and festivals of Madurai through an interactive digital tourism guide.',
    problem: 'Visitors to Madurai struggle to find organized, reliable cultural schedules, local culinary guides, and temple history in a unified, mobile-friendly guide.',
    solution: 'Engineered an interactive cultural portal featuring categorized temple archives, culinary trails, responsive galleries, and location-based discovery.',
    impact: 'Live on Netlify with rich interactive visitor guides and community appreciation.',
    features: [
      'Comprehensive temple directory: Meenakshi Amman, Thirumalai Nayakkar Mahal, Alagar Kovil',
      'Local culinary guide highlighting iconic Madurai cuisine: Jigarthanda, Kari Dosa, Bun Parotta',
      'Festival calendar and seasonal travel recommendations',
      'Optimized performance with responsive layouts and lazy-loaded photography',
      'Integrated contact and visitor feedback system'
    ],
    architecture: 'Semantic HTML5 structure, modular CSS3 glassmorphism, responsive Bootstrap 5 layout system, and vanilla JavaScript event handling.'
  }
];

class ProjectsManager {
  constructor() {
    this.projects = portfolioProjects;
    this.container = document.getElementById('projects-container');
    this.modal = document.getElementById('project-modal');
    this.modalContent = document.getElementById('modal-card-content');
    this.currentFilter = 'all';
    this.scrollerTimers = [];

    this.init();
  }

  clearScrollerTimers() {
    if (this.scrollerTimers && this.scrollerTimers.length) {
      this.scrollerTimers.forEach(t => clearInterval(t));
      this.scrollerTimers = [];
    }
  }

  init() {
    this.render('all');
    this.bindFilterEvents();
    this.bindModalEvents();
  }

  render(filter = 'all') {
    if (!this.container) return;
    this.clearScrollerTimers();
    this.currentFilter = filter;
    this.container.innerHTML = '';

    const filtered = filter === 'all' 
      ? this.projects 
      : this.projects.filter(p => p.category === filter);

    filtered.forEach((p, index) => {
      const card = document.createElement('div');
      card.className = 'project-card glow-border reveal-on-scroll is-revealed';
      card.style.animationDelay = `${index * 0.08}s`;

      const tagsHtml = p.tags.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join('');
      const liveBtnHtml = p.liveUrl 
        ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-primary" onclick="window.soundEngine?.playClick()">
             <span>Live Demo</span>
             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
           </a>`
        : `<button class="btn-card-secondary" onclick="window.projectsManager.openModal('${p.id}')">
             <span>Preview Idea</span>
           </button>`;

      let mediaHtml;
      if (p.sliderScreens && p.sliderScreens.length) {
        mediaHtml = `
          <div class="mockup-auto-scroller" data-project-id="${p.id}">
            <div class="scroller-viewport">
              <div class="scroller-track">
                ${p.sliderScreens.map((s, idx) => `
                  <div class="scroller-slide ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
                    <div class="phone-mockup-frame">
                      <img src="${s.image}" alt="${s.title}" loading="lazy">
                    </div>
                    <span class="scroller-pill-badge">${s.badge}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="scroller-nav">
              <button type="button" class="scroller-arrow prev" aria-label="Previous Screen">&lsaquo;</button>
              <div class="scroller-dots">
                ${p.sliderScreens.map((_, idx) => `
                  <button type="button" class="scroller-dot ${idx === 0 ? 'active' : ''}" data-dot-index="${idx}" aria-label="Jump to screen ${idx + 1}"></button>
                `).join('')}
              </div>
              <button type="button" class="scroller-arrow next" aria-label="Next Screen">&rsaquo;</button>
            </div>
          </div>
        `;
      } else if (p.video) {
        mediaHtml = `<video src="${p.video}" poster="${p.image}" autoplay loop muted playsinline></video>`;
      } else {
        mediaHtml = `<img src="${p.image}" alt="${p.title}" loading="lazy">`;
      }

      card.innerHTML = `
        <div class="project-thumb">
          ${mediaHtml}
          <div class="project-overlay">
            <span class="project-category-badge">${p.categoryLabel}</span>
            <span class="project-company-badge">${p.company}</span>
          </div>
        </div>

        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          
          <!-- Idea-Wise Concept Callout -->
          <div class="project-idea-box">
            <div class="idea-box-header">
              <span class="idea-indicator-dot"></span>
              <span class="idea-box-title">Core Idea & Purpose</span>
            </div>
            <p class="idea-box-text">${p.idea}</p>
          </div>

          <div class="project-tags">${tagsHtml}</div>

          <div class="project-actions">
            ${liveBtnHtml}
            <button class="btn-card-secondary" onclick="window.projectsManager.openModal('${p.id}')">
              <span>Idea Deep Dive</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </button>
          </div>
        </div>
      `;
      this.container.appendChild(card);
    });

    this.initMockupScrollers();
  }

  initMockupScrollers() {
    const scrollers = document.querySelectorAll('.mockup-auto-scroller:not(.modal-scroller)');
    scrollers.forEach(s => this.initMockupScroller(s));
  }

  initMockupScroller(scroller) {
    if (!scroller) return;
    const track = scroller.querySelector('.scroller-track');
    const slides = scroller.querySelectorAll('.scroller-slide');
    const dots = scroller.querySelectorAll('.scroller-dot');
    const prevBtn = scroller.querySelector('.scroller-arrow.prev');
    const nextBtn = scroller.querySelector('.scroller-arrow.next');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let timer = null;
    const total = slides.length;

    const updateSlide = (idx) => {
      currentIndex = (idx + total) % total;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      slides.forEach((s, i) => {
        s.classList.toggle('active', i === currentIndex);
      });

      dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
      });
    };

    const startAutoPlay = () => {
      stopAutoPlay();
      timer = setInterval(() => {
        updateSlide(currentIndex + 1);
      }, 3000);
      this.scrollerTimers.push(timer);
    };

    const stopAutoPlay = () => {
      if (timer) {
        clearInterval(timer);
        this.scrollerTimers = this.scrollerTimers.filter(t => t !== timer);
        timer = null;
      }
    };

    scroller._stopAutoPlay = stopAutoPlay;

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        window.soundEngine?.playClick();
        updateSlide(idx);
        startAutoPlay();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.soundEngine?.playClick();
        updateSlide(currentIndex - 1);
        startAutoPlay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        window.soundEngine?.playClick();
        updateSlide(currentIndex + 1);
        startAutoPlay();
      });
    }

    scroller.addEventListener('mouseenter', stopAutoPlay);
    scroller.addEventListener('mouseleave', startAutoPlay);

    let touchStartX = 0;
    scroller.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      stopAutoPlay();
    }, { passive: true });

    scroller.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          updateSlide(currentIndex + 1);
        } else {
          updateSlide(currentIndex - 1);
        }
      }
      startAutoPlay();
    }, { passive: true });

    startAutoPlay();
  }

  bindFilterEvents() {
    const buttons = document.querySelectorAll('.project-filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        window.soundEngine?.playClick();
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        this.render(filter);
      });
    });
  }

  openModal(projectId) {
    window.soundEngine?.playPop();
    const p = this.projects.find(item => item.id === projectId);
    if (!p || !this.modal || !this.modalContent) return;

    const tagsHtml = p.tags.map(t => `<span class="tech-badge">${t}</span>`).join('');
    const featuresHtml = p.features.map(f => `
      <div class="modal-feature-item">
        <span class="check-bullet">✓</span>
        <span>${f}</span>
      </div>
    `).join('');

    const liveBtn = p.liveUrl 
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" onclick="window.soundEngine?.playClick()">
           <span>Open Live Deployed Site</span>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         </a>`
      : '';

    let modalMediaHtml;
    if (p.sliderScreens && p.sliderScreens.length) {
      modalMediaHtml = `
        <div class="mockup-auto-scroller modal-scroller" data-project-id="${p.id}-modal">
          <div class="scroller-viewport">
            <div class="scroller-track">
              ${p.sliderScreens.map((s, idx) => `
                <div class="scroller-slide ${idx === 0 ? 'active' : ''}" data-slide-index="${idx}">
                  <div class="phone-mockup-frame">
                    <img src="${s.image}" alt="${s.title}">
                  </div>
                  <span class="scroller-pill-badge">${s.badge}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="scroller-nav">
            <button type="button" class="scroller-arrow prev" aria-label="Previous Screen">&lsaquo;</button>
            <div class="scroller-dots">
              ${p.sliderScreens.map((_, idx) => `
                <button type="button" class="scroller-dot ${idx === 0 ? 'active' : ''}" data-dot-index="${idx}" aria-label="Jump to screen ${idx + 1}"></button>
              `).join('')}
            </div>
            <button type="button" class="scroller-arrow next" aria-label="Next Screen">&rsaquo;</button>
          </div>
        </div>
      `;
    } else if (p.video) {
      modalMediaHtml = `<video src="${p.video}" poster="${p.image}" autoplay loop muted playsinline controls></video>`;
    } else {
      modalMediaHtml = `<img src="${p.image}" alt="${p.title}">`;
    }

    const screenshotsHtml = p.screenshots && p.screenshots.length
      ? `
        <h4 class="modal-section-title">📱 Core Application Flow & Mobile Screens</h4>
        <div class="modal-screens-grid">
          ${p.screenshots.map(s => `
            <div class="modal-screen-card">
              <img src="${s.image}" alt="${s.title}" loading="lazy">
              <div class="modal-screen-info">
                <span class="modal-screen-title">${s.title}</span>
                <span class="modal-screen-caption">${s.caption}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `
      : '';

    this.modalContent.innerHTML = `
      <div class="modal-thumb">
        ${modalMediaHtml}
      </div>
      <div class="modal-content">
        <div class="modal-meta-row">
          <span class="project-category-badge">${p.categoryLabel}</span>
          <span class="skill-level-badge">${p.company}</span>
        </div>
        <h2 class="modal-title">${p.title}</h2>

        <!-- The Core Idea -->
        <div class="modal-idea-banner">
          <span class="modal-idea-badge">💡 The Core Idea</span>
          <p class="modal-idea-text">${p.idea}</p>
        </div>

        <h4 class="modal-section-title">⚡ The Engineering Challenge</h4>
        <p class="modal-desc-full" style="margin-bottom: 1.25rem;">${p.problem}</p>

        <h4 class="modal-section-title">🛠️ Engineered Solution & Architecture</h4>
        <p class="modal-desc-full" style="margin-bottom: 1.25rem;">${p.solution}</p>

        <h4 class="modal-section-title">📈 Commercial Impact & Results</h4>
        <p class="modal-desc-full" style="margin-bottom: 1.25rem; color: var(--accent-primary); font-weight: 600;">${p.impact}</p>

        <h4 class="modal-section-title">🚀 Core Capabilities & Highlights</h4>
        <div class="modal-feature-list">${featuresHtml}</div>

        ${screenshotsHtml}

        <h4 class="modal-section-title">💻 Technical Stack & Architecture Details</h4>
        <p class="modal-desc-full" style="margin-bottom: 1rem; font-size: 0.95rem;">${p.architecture}</p>
        <div class="modal-tags">${tagsHtml}</div>

        <div class="modal-cta-row">
          ${liveBtn}
          <button class="btn-secondary" onclick="window.projectsManager.closeModal()">Close Preview</button>
        </div>
      </div>
    `;

    if (p.sliderScreens && p.sliderScreens.length) {
      const modalScroller = this.modal.querySelector('.mockup-auto-scroller.modal-scroller');
      if (modalScroller) {
        this.initMockupScroller(modalScroller);
      }
    }

    if (this.modalContent) {
      this.modalContent.scrollTop = 0;
    }
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    window.soundEngine?.playClick();
    if (!this.modal) return;
    const modalScroller = this.modal.querySelector('.mockup-auto-scroller.modal-scroller');
    if (modalScroller && modalScroller._stopAutoPlay) {
      modalScroller._stopAutoPlay();
    }
    const modalVideo = this.modal.querySelector('video');
    if (modalVideo) {
      modalVideo.pause();
    }
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  bindModalEvents() {
    const closeBtn = document.getElementById('modal-close-button');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal && this.modal.classList.contains('active')) {
        this.closeModal();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.projectsManager = new ProjectsManager();
});
