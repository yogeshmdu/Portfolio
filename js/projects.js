/**
 * Projects Engine - Focused on Air Calibre Systems & Verified UI Projects
 */

const portfolioProjects = [
  {
    id: 'air-calibre-web',
    title: 'Air Calibre System Enterprise Web Portal',
    company: 'Air Calibre Systems',
    category: 'enterprise',
    categoryLabel: 'Enterprise ERP',
    tagline: 'Comprehensive ERP validation portal for cleanroom & HVAC compliance audits',
    image: 'assets/images/project-aircalibre-web.jpg',
    liveUrl: 'https://validationwebsite.netlify.app',
    githubUrl: null,
    tags: ['Core PHP', 'Bootstrap 5', 'JavaScript ES6+', 'MySQL', 'ERP Workflows'],
    overview: 'Built for Air Calibre Systems, a premier engineering validation company in Chennai. The platform digitizes complex field audit workflows, streamlining operations from contract intake to on-site testing schedules and customer report generation.',
    problem: 'Traditional validation audits relied on manual spreadsheets, error-prone data re-entry, and disjointed client communication, causing significant turnaround delays.',
    solution: 'Designed and engineered an integrated ERP web architecture with modular role-based authentication, real-time stage tracking, and seamless validation workflow integration.',
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
    title: 'Air Calibre System Validation & Report Engine',
    company: 'Air Calibre Systems',
    category: 'enterprise',
    categoryLabel: 'Module & Engine',
    tagline: 'Advanced report generation engine and document archive repository',
    image: 'assets/images/project-aircalibre-module.jpg',
    liveUrl: 'http://validationreportmodule.netlify.app',
    githubUrl: null,
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS3', 'PDF Engine', 'Calculations'],
    overview: 'A high-precision report creation engine and document storage hub specifically engineered to calculate validation metrics and generate compliance reports for pharmaceuticals and cleanrooms.',
    problem: 'Generating multi-page audit certificates required tedious manual calculations of airflow velocity, HEPA filter efficiency, and particle counts, consuming hours per test.',
    solution: 'Developed an automated calculation engine with pre-engineered audit templates that process raw field measurements into formatted, printable validation reports in seconds.',
    features: [
      'Extensive library of pre-built validation and compliance certificate templates',
      'Automated arithmetic engine calculating airflow volume, changes/hour, and tolerances',
      'Instant report rendering and formatted document generation',
      'Historical report repository with quick search and audit-log trail',
      'Secure data validation preventing out-of-spec or missing parameter submissions'
    ],
    architecture: 'Core PHP mathematical computation routines, dynamic DOM template hydration, relational audit persistence, and fast PDF-ready output formatting.'
  },
  {
    id: 'ecommerce-laravel-react',
    title: 'Air Calibre E-commerce & Claim System',
    company: 'Air Calibre Systems',
    category: 'enterprise',
    categoryLabel: 'Laravel & React',
    tagline: 'Integrated claim management workflows & scalable e-commerce storefront',
    image: 'assets/images/project-aircalibre-preview.jpg',
    liveUrl: null,
    githubUrl: null,
    tags: ['Laravel', 'React.js', 'Redux', 'Core PHP', 'Tailwind CSS', 'MongoDB', 'MySQL'],
    overview: 'Architected claim management systems and e-commerce platforms during my tenure at Air Calibre Systems. Combines interactive claim processing workflows with an end-to-end e-commerce shopping experience.',
    problem: 'Managing operational equipment claims and inventory purchases simultaneously required two distinct workflows integrated into a unified portal.',
    solution: 'Developed interactive claim management RESTful endpoints using Core PHP, AJAX, and MySQL, paired with a modern e-commerce storefront built with Laravel, React.js, Redux, Tailwind CSS, and MongoDB.',
    features: [
      'Interactive claim management workflows with status lifecycle auditing',
      'Centralized Redux state container managing cart, user sessions, and product variants',
      'Flexible MongoDB product schemas supporting dynamic attributes and equipment specs',
      'Secure order processing with input validation and automated receipt generation',
      'Mobile-first responsive styling crafted with Tailwind CSS'
    ],
    architecture: 'Laravel & Core PHP backend services, relational MySQL for claims, MongoDB for product catalogs, and React.js with Redux for frontend state.'
  },
  {
    id: 'imdb-clone',
    title: 'IMDb Movie Discovery Hub',
    company: 'Web Application',
    category: 'react',
    categoryLabel: 'React & API',
    tagline: 'High-speed movie exploration web application powered by RapidAPI',
    image: 'assets/images/project-imdb.png',
    liveUrl: null,
    githubUrl: null,
    tags: ['React.js', 'RapidAPI', 'Tailwind CSS', 'Fetch API', 'Component Architecture'],
    overview: 'A responsive and intuitive IMDb replica built with React.js. It connects to RapidAPI to stream real-time trending movies, detailed cast filmographies, vocalists/singers, trailers, and ratings.',
    problem: 'Movie enthusiasts need a fast, distraction-free interface to discover movies, inspect artist filmographies, and check user ratings without heavy ad bloat.',
    solution: 'Engineered a modern single-page React app with debounced live search, modular card layouts, genre filtering, and responsive modal summaries.',
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
    id: 'food-delivery-app',
    title: 'Food Delivery App (Madurai Syead Meats)',
    company: 'Full-Stack Application',
    category: 'react',
    categoryLabel: 'React Native & Node.js',
    tagline: 'Fresh meat & food delivery platform powered by Node.js, PostgreSQL & Render',
    image: 'assets/images/project-food-delivery.jpg',
    liveUrl: 'https://food-delivery-app-1-ufhh.onrender.com/#/home',
    githubUrl: null,
    tags: ['React Native', 'Node.js', 'PostgreSQL', 'Neon DB', 'Render', 'Antigravity IDE', 'AI Tools'],
    overview: 'A complete on-demand food & fresh meat delivery web application built for Madurai Syead Meats. Features fast category navigation (Chicken, Mutton, Fish, Eggs), dynamic search, mobile-first responsive design, and direct WhatsApp/call ordering.',
    problem: 'Local meat purveyors needed an ultra-fast, modern digital storefront to eliminate phone order bottlenecks and showcase fresh cuts with real-time pricing and delivery tracking.',
    solution: 'Engineered a modern cross-platform application utilizing React Native / React.js on the frontend, a Node.js REST API on the backend, and serverless PostgreSQL on Neon hosted on Render, developed using Antigravity and AI-assisted workflows.',
    features: [
      'Clean mobile-first UI with categorized cuts: Chicken, Mutton, Fish, and Eggs',
      'Instant debounced search bar for swift product lookup and filtering',
      'Direct one-tap WhatsApp and phone call triggers for local delivery coordination',
      'Serverless PostgreSQL database persistence hosted on Neon',
      'Continuous deployment and cloud hosting powered by Render',
      'Developed with Antigravity IDE and modern AI-assisted engineering tools'
    ],
    architecture: 'React Native / React.js frontend, Node.js & Express REST API, Neon serverless PostgreSQL, deployed on Render cloud platform.'
  },
  {
    id: 'travel-explorer',
    title: 'Global Travel & Destination Platform',
    company: 'Web Application',
    category: 'react',
    categoryLabel: 'React & UI',
    tagline: 'Immersive exploration portal showcasing top travel destinations worldwide',
    image: 'assets/images/project-swiggy-travel.jpg',
    liveUrl: null,
    githubUrl: null,
    tags: ['React.js', 'Bootstrap 5.3', 'Interactive UI', 'CSS Animations'],
    overview: 'A vibrant, interactive travel web application built with React and Bootstrap 5.3. Designed for travelers eager to uncover hidden gems, explore destination highlights, and customize travel packages.',
    problem: 'Travel websites can be overwhelming with cluttered navigation and confusing destination catalogs.',
    solution: 'Created an aesthetic, card-driven itinerary explorer with high-res imagery, interactive filters for continents, and clear adventure guides.',
    features: [
      'Continent and activity-based destination filters',
      'Interactive travel itinerary preview modal with day-by-day guides',
      'High-resolution imagery showcase with smooth card hover transitions',
      'Interactive cost estimator and trip inquiry form',
      'Fully responsive layouts ensuring flawless display across mobile and desktop'
    ],
    architecture: 'Componentized React directory structure utilizing modern Bootstrap 5.3 utilities and custom CSS backdrop filters.'
  },
  {
    id: 'explore-madurai',
    title: 'Explore Madurai Cultural & Tourism Guide',
    company: 'Cultural Showcase',
    category: 'culture',
    categoryLabel: 'Tourism Showcase',
    tagline: 'Interactive heritage tribute to the temple city of Madurai, Tamil Nadu',
    image: 'assets/images/project-madurai.jpg',
    liveUrl: 'http://exploremadurai.netlify.app',
    githubUrl: null,
    tags: ['Bootstrap 5', 'HTML5', 'CSS3', 'JavaScript', 'Heritage UI'],
    overview: 'A tribute to Yogesh’s home city, this interactive guide captures the historical grandeur and timeless cultural soul of Madurai — from the iconic Meenakshi Amman Temple to Thirumalai Nayakkar Mahal.',
    problem: 'Tourists visiting Madurai often lack a single, beautifully organized digital guide highlighting history, monument timings, architectural highlights, and local food spots.',
    solution: 'Crafted a fast-loading, visually rich web experience that presents Madurai’s monuments with curated stories, visitor recommendations, and authentic cultural color schemes.',
    features: [
      'Heritage monument cards with architectural history and visiting guidelines',
      'Interactive location guides featuring Meenakshi Temple, Thirumalai Mahal, and Alagar Kovil',
      'Madurai culinary trail highlighting iconic local street foods and sweets',
      'Responsive mobile-ready layout designed for on-the-go tourists',
      'Optimized lightweight asset delivery for rapid mobile loading'
    ],
    architecture: 'Semantic HTML5 structure with custom Bootstrap 5 themes, accessible landmark markup, and optimized CSS styling.'
  }
];

class ProjectsManager {
  constructor() {
    this.projects = portfolioProjects;
    this.currentFilter = 'all';
    this.modal = document.getElementById('project-modal');
    this.modalContent = document.getElementById('modal-card-content');
    this.container = document.getElementById('projects-container');
    
    this.init();
  }

  init() {
    this.render();
    this.bindFilterEvents();
    this.bindModalEvents();
  }

  render(filter = 'all') {
    if (!this.container) return;
    this.container.innerHTML = '';

    const filtered = filter === 'all' 
      ? this.projects 
      : this.projects.filter(p => p.category === filter);

    filtered.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card glow-border reveal-on-scroll is-revealed';
      card.setAttribute('data-category', p.category);
      card.style.animationDelay = `${idx * 0.08}s`;

      const tagsHtml = p.tags.slice(0, 4).map(t => `<span class="project-tag">${t}</span>`).join('');
      const liveBtnHtml = p.liveUrl 
        ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-primary" onclick="window.soundEngine?.playClick()">
             <span>Live Demo</span>
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
           </a>`
        : `<button class="btn-card-secondary" onclick="window.projectsManager.openModal('${p.id}')">
             <span>Preview</span>
           </button>`;

      card.innerHTML = `
        <div class="project-thumb">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <div class="project-overlay">
            <span class="project-category-badge">${p.categoryLabel}</span>
          </div>
        </div>
        <div class="project-body">
          <div style="font-size: 0.76rem; color: var(--accent-cyan); font-weight: 700; margin-bottom: 0.35rem; text-transform: uppercase; letter-spacing: 0.05em;">${p.company}</div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.tagline}</p>
          <div class="project-tags">${tagsHtml}</div>
          <div class="project-actions">
            ${liveBtnHtml}
            <button class="btn-card-secondary" onclick="window.projectsManager.openModal('${p.id}')">
              <span>Deep Dive</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </button>
          </div>
        </div>
      `;
      this.container.appendChild(card);
    });
  }

  bindFilterEvents() {
    const buttons = document.querySelectorAll('.project-filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
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

    this.modalContent.innerHTML = `
      <div class="modal-thumb">
        <img src="${p.image}" alt="${p.title}">
      </div>
      <div class="modal-content">
        <div class="modal-meta-row">
          <span class="project-category-badge">${p.categoryLabel}</span>
          <span class="skill-level-badge">${p.company}</span>
        </div>
        <h2 class="modal-title">${p.title}</h2>
        <p class="modal-desc-full">${p.overview}</p>

        <h4 class="modal-section-title">⚡ The Challenge</h4>
        <p class="modal-desc-full" style="margin-bottom: 1.5rem;">${p.problem}</p>

        <h4 class="modal-section-title">💡 The Engineered Solution</h4>
        <p class="modal-desc-full" style="margin-bottom: 1.5rem;">${p.solution}</p>

        <h4 class="modal-section-title">🚀 Core Capabilities & Highlights</h4>
        <div class="modal-feature-list">${featuresHtml}</div>

        <h4 class="modal-section-title">🛠️ Technical Stack & Architecture</h4>
        <p class="modal-desc-full" style="margin-bottom: 1rem; font-size: 0.95rem;">${p.architecture}</p>
        <div class="modal-tags">${tagsHtml}</div>

        <div class="modal-cta-row">
          ${liveBtn}
          <button class="btn-secondary" onclick="window.projectsManager.closeModal()">Close Preview</button>
        </div>
      </div>
    `;

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    window.soundEngine?.playClick();
    if (!this.modal) return;
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
