/**
 * Interactive Terminal / CLI Mode - Updated with Verified UI Projects & Instagram Handle
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
      skills: () => this.cmdSkills(),
      projects: () => this.cmdProjects(),
      experience: () => this.cmdExperience(),
      education: () => this.cmdEducation(),
      contact: () => this.cmdContact(),
      resume: () => this.cmdResume(),
      clear: () => this.cmdClear(),
      theme: () => this.cmdTheme(),
      matrix: () => this.cmdMatrix(),
      wordmark: () => this.cmdWordmark(),
      blueprint: () => this.cmdWordmark(),
      sudo: () => "Permission denied: You are a guest in Yogesh's workstation. 😉"
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
      btn.addEventListener('click', () => this.toggle());
    });

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
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
            this.input.value = this.commandHistory[this.historyIndex];
          }
        } else if (e.key === 'ArrowDown') {
          if (this.historyIndex < this.commandHistory.length - 1) {
            this.historyIndex++;
            this.input.value = this.commandHistory[this.historyIndex];
          } else {
            this.historyIndex = this.commandHistory.length;
            this.input.value = '';
          }
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        this.toggle();
      }
    });
  }

  toggle() {
    window.soundEngine?.playPop();
    if (!this.drawer) return;
    this.drawer.classList.toggle('active');
    if (this.drawer.classList.contains('active')) {
      setTimeout(() => this.input?.focus(), 300);
    }
  }

  open() {
    if (!this.drawer) return;
    this.drawer.classList.add('active');
    setTimeout(() => this.input?.focus(), 300);
  }

  close() {
    window.soundEngine?.playClick();
    if (!this.drawer) return;
    this.drawer.classList.remove('active');
  }

  handleCommand(cmdLine) {
    window.soundEngine?.playClick();
    const parts = cmdLine.toLowerCase().split(' ');
    const cmd = parts[0];

    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt">yogesh@developer:~$</span> <span style="color:#ffffff;">${this.escapeHtml(cmdLine)}</span>`;
    this.historyContainer.appendChild(userLine);

    if (this.commands[cmd]) {
      const output = this.commands[cmd]();
      if (output) {
        const outLine = document.createElement('div');
        outLine.className = 'terminal-line output';
        outLine.innerHTML = output;
        this.historyContainer.appendChild(outLine);
      }
    } else {
      const errLine = document.createElement('div');
      errLine.className = 'terminal-line output';
      errLine.style.color = '#f87171';
      errLine.textContent = `bash: command not found: ${cmd}. Type 'help' for available commands.`;
      this.historyContainer.appendChild(errLine);
    }

    this.body.scrollTop = this.body.scrollHeight;
  }

  cmdHelp() {
    return `Available system commands:
  • <span style="color:#00f2fe;">whoami</span>      - Overview of Yogesh's background & commercial experience
  • <span style="color:#00f2fe;">skills</span>      - Comprehensive technical stack & frameworks
  • <span style="color:#00f2fe;">projects</span>    - List Air Calibre Systems & verified projects
  • <span style="color:#00f2fe;">experience</span>  - Career timeline: VSplash Tech Labs & Air Calibre Systems
  • <span style="color:#00f2fe;">education</span>   - Engineering (B.E. ECE 2019) & academic foundation
  • <span style="color:#00f2fe;">contact</span>     - Direct phone (+91 8098621 639), email, and Instagram (@its_guru.__)
  • <span style="color:#00f2fe;">resume</span>      - Open official PDF resume in Google Drive
  • <span style="color:#00f2fe;">theme</span>       - Toggle between Obsidian Dark and Light mode
  • <span style="color:#00f2fe;">blueprint</span>   - Inspect WebGL Vector Wordmark shader telemetry
  • <span style="color:#00f2fe;">matrix</span>      - Run the cybernetic Matrix sequence
  • <span style="color:#00f2fe;">clear</span>       - Clear the terminal screen`;
  }

  cmdWhoami() {
    return `<span style="color:#10b981; font-weight:bold;">YOGESH B</span> | Full Stack Developer & Software Engineer
Experience: 5+ Years across frontend, backend, APIs, and relational/document databases.
Commercial Experience:
  • Software Engineer at VSplash Tech Labs Private Ltd. (Remote | April 2025 - October 2026)
  • Full Stack Developer at Air Calibre Systems (Chennai | June 2021 - February 2025)
Education: Bachelor of Engineering (B.E.) in Electronics and Communication Engineering (Graduated: 2019)
Specializations: Enterprise ERP Workflows, Validation Report Engines, Core PHP, Laravel, React.js, Redux, Node.js, MySQL, MongoDB, and AWS EC2.`;
  }

  cmdSkills() {
    return `Technical Stack Matrix:
  [Languages]   JavaScript ES6+, TypeScript, PHP, Python, SQL, HTML5, CSS3
  [Frontend]    React.js, Redux, React Native, Tailwind CSS, Bootstrap 5, jQuery, AJAX
  [Backend]     Core PHP, Laravel, Node.js, Express.js, Doctrine ORM, Django, SQLAlchemy
  [Databases]   MySQL, PostgreSQL, MongoDB
  [APIs & Arch] RESTful APIs, GraphQL, WebSockets, GoDaddy API, Google Maps API
  [DevOps/Cloud]Docker, AWS EC2, Firebase Hosting, Nginx, Apache, Git/GitHub, Postman, Jest`;
  }

  cmdProjects() {
    return `Featured Showcase Projects (Air Calibre Systems & Web Apps):
  1. <span style="color:#00f2fe;">Air Calibre System Enterprise Web Portal</span> [Live on Netlify]
     Stack: Core PHP, Bootstrap 5, JavaScript ES6+, MySQL, ERP Workflows
     URL: <a href="https://validationwebsite.netlify.app" target="_blank" style="color:#38bdf8; text-decoration:underline;">https://validationwebsite.netlify.app</a>
  2. <span style="color:#00f2fe;">Air Calibre System Validation & Report Engine</span> [Live on Netlify]
     Stack: PHP, MySQL, JavaScript, CSS3, Calculation Engine, PDF Export
     URL: <a href="http://validationreportmodule.netlify.app" target="_blank" style="color:#38bdf8; text-decoration:underline;">http://validationreportmodule.netlify.app</a>
  3. <span style="color:#00f2fe;">Air Calibre E-commerce & Claim System</span>
     Stack: Laravel, React.js, Redux, Core PHP, Tailwind CSS, MongoDB, MySQL
  4. <span style="color:#00f2fe;">Food Delivery App (Madurai Syead Meats)</span> [Live on Render]
     Stack: React Native / React, Node.js, PostgreSQL (Neon), Render, Antigravity
     URL: <a href="https://food-delivery-app-1-ufhh.onrender.com/#/home" target="_blank" style="color:#38bdf8; text-decoration:underline;">https://food-delivery-app-1-ufhh.onrender.com/#/home</a>
  5. <span style="color:#00f2fe;">IMDb Movie Discovery Hub</span>
     Stack: React.js, RapidAPI, Tailwind CSS, Fetch API
  6. <span style="color:#00f2fe;">Global Travel & Destination Platform</span>
     Stack: React.js, Bootstrap 5.3, Interactive UI
  7. <span style="color:#00f2fe;">Explore Madurai Cultural & Tourism Guide</span> [Live on Netlify]
     Stack: Bootstrap 5, HTML5, CSS3, JavaScript
     URL: <a href="http://exploremadurai.netlify.app" target="_blank" style="color:#38bdf8; text-decoration:underline;">http://exploremadurai.netlify.app</a>`;
  }

  cmdExperience() {
    return `🏢 Commercial Experience History:
  • <span style="color:#38bdf8; font-weight:bold;">VSplash Tech Labs Private Ltd.</span> — Software Engineer
    Location: Hyderabad, India | Remote  |  Duration: April 2025 – October 2026
    - Developed and maintained core product dashboards: Getty, Care, Zylo, and Roster.
    - Designed automated data retrieval pipelines and reporting modules.
    - Implemented CRM order handling and automated GoDaddy product/service provisioning.
    - Led modernization of legacy monolithic views into modern React/TypeScript/Tailwind SPAs.
    - Handled deployments and testing via AWS EC2, Postman, and Git/GitHub.

  • <span style="color:#38bdf8; font-weight:bold;">Air Calibre Systems</span> — Full Stack Developer
    Location: Chennai, India  |  Duration: June 2021 – February 2025
    - Architected claim management systems, validation portals, and e-commerce platforms.
    - Built interactive claim management workflows and RESTful endpoints using PHP & MySQL.
    - Developed end-to-end e-commerce platform using Laravel, React.js, Redux, and MongoDB.
    - Managed hosting, deployments, and database migrations across cPanel and cloud hosting.`;
  }

  cmdEducation() {
    return `🎓 Education Credentials:
  • <span style="color:#00f2fe; font-weight:bold;">Bachelor of Engineering (B.E.) — ECE</span>
    Electronics and Communication Engineering | Graduated: 2019
    Pandian Saraswathi Yadav Engineering College, Sivagangai
  • <span style="color:#00f2fe; font-weight:bold;">Higher Secondary School Certificate</span>
    St. Mary's Higher Secondary School, Madurai`;
  }

  cmdContact() {
    return `Direct Contact Information for Yogesh B:
  📞 Phone: <a href="tel:+918098621639" style="color:#38bdf8;">+91 8098621 639</a>
  📧 Email: <a href="mailto:yogesh0398@gmail.com" style="color:#38bdf8;">yogesh0398@gmail.com</a>
  📍 Location: Madurai, Tamil Nadu, India (122/4 Chinna Rajakoor, Rajakoor - 625107)
  💼 LinkedIn: <a href="http://linkedin.com/in/yogesh-app-dev" target="_blank" style="color:#38bdf8;">linkedin.com/in/yogesh-app-dev</a>
  📸 Instagram: <a href="https://www.instagram.com/its_guru.__/" target="_blank" style="color:#38bdf8;">@its_guru.__</a> (Official Profile)`;
  }

  cmdResume() {
    window.open('https://drive.google.com/file/d/1bqSkS_GvY5UXWBCcUDE_82oHqTe4ww3L/view?usp', '_blank');
    return `Opening Yogesh's official resume in new tab...`;
  }

  cmdClear() {
    this.historyContainer.innerHTML = '';
    return null;
  }

  cmdTheme() {
    if (window.portfolioMain) {
      window.portfolioMain.toggleTheme();
      return `Theme switched successfully.`;
    }
    return `Theme toggle invoked.`;
  }

  cmdMatrix() {
    const lines = [
      'WAKE UP, NEO...',
      'THE MATRIX HAS YOU...',
      'FOLLOW THE WHITE RABBIT.',
      '01011001 01001111 01000111 01000101 01010011 01001000',
      'ACCESS GRANTED: YOGESH B (AIR CALIBRE SYSTEMS & VSPLASH) WORKSTATION ONLINE.'
    ];
    return `<span style="color:#22c55e; font-family:monospace;">${lines.join('<br>')}</span>`;
  }

  cmdWordmark() {
    return `<span style="color:#00f2fe; font-family:monospace;">
    ⚡ WebGL Vector Wordmark Rig Active<br>
    • Shader: 2-Channel Procedural Font Atlas (Red: Solid, Green: Vector Outline)<br>
    • Lattice Handles: 3 Dynamic Vertex Nodes with Damped Pointer Tracking<br>
    • Coordinate Readouts: Live [X, Y] Screen Normal Space<br>
    • Interaction: Hover pointer over the hero title or test sweep dynamics!
    </span>`;
  }

  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.interactiveTerminal = new InteractiveTerminal();
});
