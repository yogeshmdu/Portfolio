/**
 * Interactive Terminal / CLI Mode
 * Themed with Midnight Charcoal (#17191c), Cool Steel Grey (#929DA7), and Vibrant Coral Orange (#FF4B32).
 */

class InteractiveTerminal {
  constructor() {
    this.drawer = document.getElementById('terminal-drawer');
    this.body = document.getElementById('terminal-body');
    this.historyContainer = document.getElementById('terminal-history');
    this.input = document.getElementById('terminal-input');
    this.toggleBtns = document.querySelectorAll('.terminal-trigger');
    this.closeBtn = document.getElementById('terminal-close-btn');

    this.commands = {
      help: () => this.cmdHelp(),
      whoami: () => this.cmdWhoami(),
      disciplines: () => this.cmdDisciplines(),
      ideas: () => this.cmdDisciplines(),
      skills: () => this.cmdSkills(),
      projects: () => this.cmdProjects(),
      experience: () => this.cmdExperience(),
      education: () => this.cmdEducation(),
      contact: () => this.cmdContact(),
      resume: () => this.cmdResume(),
      clock: () => this.cmdClock(),
      clear: () => this.cmdClear(),
      theme: () => this.cmdTheme(),
      sudo: () => "Permission denied: Guest mode active in Yogesh's engineering workstation. 😉"
    };

    this.commandHistory = [];
    this.historyIndex = -1;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.toggleBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggle();
      });
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.close();
      });
    }

    // Click on backdrop outside the modal window closes the popup
    if (this.drawer) {
      this.drawer.addEventListener('click', (e) => {
        if (e.target === this.drawer) {
          this.close();
        }
      });
    }

    // Clicking anywhere inside terminal body auto-focuses the input
    if (this.body && this.input) {
      this.body.addEventListener('click', (e) => {
        if (window.getSelection().toString().length === 0) {
          this.input.focus();
        }
      });
    }

    if (this.input) {
      this.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const val = this.input.value.trim();
          if (val) {
            this.handleCommand(val);
            this.commandHistory.push(val);
            this.historyIndex = this.commandHistory.length;
            this.input.value = '';
          }
        } else if (e.key === 'ArrowUp') {
          if (this.historyIndex > 0) {
            this.historyIndex--;
            this.input.value = this.commandHistory[this.historyIndex] || '';
          }
        } else if (e.key === 'ArrowDown') {
          if (this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            this.input.value = this.commandHistory[this.historyIndex] || '';
          } else {
            this.historyIndex = this.commandHistory.length;
            this.input.value = '';
          }
        }
      });
    }

    // Keyboard shortcuts: Escape to close modal, Ctrl/Cmd + ` to toggle
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.drawer && this.drawer.classList.contains('open')) {
        this.close();
      } else if (e.key === '`' && (e.ctrlKey || e.metaKey)) {
        this.toggle();
      }
    });
  }

  toggle() {
    window.soundEngine?.playPop();
    if (!this.drawer) return;
    this.drawer.classList.toggle('open');
    if (this.drawer.classList.contains('open')) {
      setTimeout(() => this.input && this.input.focus(), 150);
    }
  }

  close() {
    window.soundEngine?.playClick();
    if (this.drawer) {
      this.drawer.classList.remove('open');
    }
  }

  handleCommand(cmdRaw) {
    window.soundEngine?.playClick();
    const cmd = cmdRaw.toLowerCase().trim();
    const entry = document.createElement('div');
    entry.className = 'history-entry';

    const promptLine = document.createElement('div');
    promptLine.className = 'history-prompt';
    promptLine.innerHTML = `<span class="term-coral">yogesh@developer</span>:<span class="term-steel">~</span>$ ${this.escapeHtml(cmdRaw)}`;
    entry.appendChild(promptLine);

    const outputLine = document.createElement('div');
    outputLine.className = 'history-output';

    if (this.commands[cmd]) {
      const result = this.commands[cmd]();
      if (result !== undefined) {
        outputLine.innerHTML = result;
        entry.appendChild(outputLine);
      }
    } else {
      outputLine.innerHTML = `<span class="term-err">Command not found: '${this.escapeHtml(cmd)}'. Type <span class="term-coral">'help'</span> for a list of valid commands.</span>`;
      entry.appendChild(outputLine);
    }

    if (this.historyContainer) {
      this.historyContainer.appendChild(entry);
      this.body.scrollTop = this.body.scrollHeight;
    }
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /* Command Implementations */
  cmdHelp() {
    return `
<div class="cli-table">
  <div><span class="term-coral">disciplines</span>  - Inspect core engineering disciplines & ideas</div>
  <div><span class="term-coral">whoami</span>       - High-level bio and commercial credentials</div>
  <div><span class="term-coral">experience</span>   - Commercial tenure at VSplash Tech Labs & Air Calibre</div>
  <div><span class="term-coral">projects</span>     - List of 7 live deployments & key engineering feats</div>
  <div><span class="term-coral">skills</span>       - Technical competencies & architecture stack</div>
  <div><span class="term-coral">education</span>    - Academic foundation (B.E. ECE 2019)</div>
  <div><span class="term-coral">clock</span>        - Current Madurai IST time & availability</div>
  <div><span class="term-coral">contact</span>      - Phone, email, and LinkedIn</div>
  <div><span class="term-coral">resume</span>       - Direct download of official resume (PDF)</div>
  <div><span class="term-coral">theme</span>        - Toggle between Obsidian Dark and Luxe Light</div>
  <div><span class="term-coral">clear</span>        - Clear terminal history</div>
</div>
`;
  }

  cmdWhoami() {
    return `
<strong>Yogesh B</strong> — Full Stack Developer & Software Engineer
• <strong>Experience:</strong> 5+ Years of verified commercial engineering
• <strong>Companies:</strong> VSplash Tech Labs Private Ltd. (Remote) & Air Calibre Systems (Chennai)
• <strong>Specialization:</strong> Enterprise ERP Portals, GoDaddy Automation, React/TypeScript SPAs, REST APIs
• <strong>Base:</strong> Madurai, Tamil Nadu, India (Available for Worldwide Remote & On-Site Roles)
`;
  }

  cmdDisciplines() {
    return `
<span class="term-coral">Idea-Wise Core Disciplines:</span>
1. <strong>Enterprise ERP & Cleanroom Compliance</strong> — Calculation engine & audit automation web portal.
2. <strong>Product Dashboards & SaaS Scaling</strong> — Getty, Care, Zylo, Roster dashboards at VSplash Tech Labs.
3. <strong>Third-Party API Automation</strong> — GoDaddy domain & service lifecycle provisioning with CRM queues.
4. <strong>Cross-Platform SPAs & Serverless SQL</strong> — React Native, Node.js, Neon PostgreSQL on Render.
`;
  }

  cmdExperience() {
    return `
<span class="term-coral">Commercial Engineering Milestones:</span>
1. <strong>Software Engineer | VSplash Tech Labs Private Ltd.</strong>
   <em>April 2025 – October 2026 | Hyderabad, India (Remote)</em>
   • Maintained enterprise dashboards (Getty, Care, Zylo, Roster) using PHP, Doctrine ORM, MongoDB, MySQL.
   • Integrated GoDaddy APIs for automated service and product management.
   • Led modernization into React.js, TypeScript, and Tailwind CSS SPAs.
   • Python analytics pipelines, AWS EC2, Postman testing, and CI/CD.

2. <strong>Full Stack Developer | Air Calibre Systems</strong>
   <em>June 2021 – February 2025 | Chennai, India</em>
   • Architected cleanroom ERP portal & calculation report module.
   • Built claim management RESTful endpoints (Core PHP, AJAX, MySQL).
   • Developed e-commerce platform using Laravel, React.js, Redux, Tailwind, MongoDB.
`;
  }

  cmdProjects() {
    return `
<span class="term-coral">Key Projects & Live Deployments:</span>
• <strong>Food Delivery Application</strong> - <a href="https://food-delivery-app-1-ufhh.onrender.com/#/home" target="_blank" class="term-link">food-delivery-app-1-ufhh.onrender.com</a>
• <strong>World Travel Budget</strong> - <a href="https://worldtravelbudget.netlify.app/" target="_blank" class="term-link">worldtravelbudget.netlify.app</a>
• <strong>Enterprise Web Portal</strong> - <a href="https://website-of-acs.netlify.app/" target="_blank" class="term-link">website-of-acs.netlify.app</a>
• <strong>Reports Module Website</strong> - <a href="http://validationreportmodule.netlify.app" target="_blank" class="term-link">validationreportmodule.netlify.app</a>
• <strong>Explore Madurai Tourism</strong> - <a href="http://exploremadurai.netlify.app" target="_blank" class="term-link">exploremadurai.netlify.app</a>
• <strong>IMDb Movie Discovery Hub</strong> - React.js, RapidAPI, Tailwind CSS
• <strong>Food Ordering & Culinary Web App</strong> - React.js, Redux, Tailwind CSS
`;
  }

  cmdSkills() {
    return `
<span class="term-coral">Technical Stack Matrix:</span>
• <strong>Frontend:</strong> React.js, Redux Toolkit, React Native, TypeScript, JavaScript ES6+, Tailwind CSS, Bootstrap 5
• <strong>Backend:</strong> Node.js, Express.js, Laravel, Core PHP, Doctrine ORM, Python
• <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL (Neon Serverless)
• <strong>Cloud & APIs:</strong> RESTful APIs, WebSockets, GoDaddy APIs, AWS EC2, Docker, Postman, Git
`;
  }

  cmdEducation() {
    return `
<span class="term-coral">Academic Credentials:</span>
• <strong>Bachelor of Engineering (B.E.) — Electronics & Communication Engineering (ECE)</strong>
  Pandian Saraswathi Yadav Engineering College, Sivagangai (Graduated: 2019)
• <strong>Higher Secondary School Certificate</strong>
  St. Mary's Higher Secondary School, Madurai
`;
  }

  cmdContact() {
    return `
<span class="term-coral">Direct Channels:</span>
• <strong>Phone:</strong> <a href="tel:+918098621639" class="term-link">+91 8098621 639</a>
• <strong>Email:</strong> <a href="mailto:yogesh0398@gmail.com" class="term-link">yogesh0398@gmail.com</a>
• <strong>LinkedIn:</strong> <a href="http://linkedin.com/in/yogesh-app-dev" target="_blank" class="term-link">linkedin.com/in/yogesh-app-dev</a>
• <strong>Base:</strong> Madurai, Tamil Nadu, India
`;
  }

  cmdResume() {
    window.open('https://drive.google.com/uc?export=download&id=18j0J1hhtb_8h6INpdU-PzHpfSm-R8x5n', '_blank');
    return `Initiating official resume download from Google Drive... 📄`;
  }

  cmdClock() {
    const now = new Date();
    const formatter = new Intl.DateTimeFormat([], { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    return `Current time in Madurai: <span class="term-coral">${formatter.format(now)} IST</span> (Tamil Nadu, India)`;
  }

  cmdTheme() {
    window.portfolioApp?.toggleTheme();
    return `Toggled visual color theme.`;
  }

  cmdClear() {
    if (this.historyContainer) {
      this.historyContainer.innerHTML = '';
    }
    return undefined;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.interactiveTerminal = new InteractiveTerminal();
});
