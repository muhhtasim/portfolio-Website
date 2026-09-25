function printResume() {
  // Force desktop-width viewport so mobile/tablet prints like a laptop
  const viewportMeta = document.querySelector('meta[name="viewport"]')
  const originalContent = viewportMeta ? viewportMeta.content : 'width=device-width, initial-scale=1.0'

  if (viewportMeta) {
    viewportMeta.content = 'width=1200, initial-scale=1.0'
  }

  // Small delay to let the browser reflow at the new width before printing
  setTimeout(() => {
    window.print()
    // Restore original viewport after print dialog opens
    setTimeout(() => {
      if (viewportMeta) {
        viewportMeta.content = originalContent
      }
    }, 1500)
  }, 300)
}

export default function Resume({ onBack }) {
  return (
    <div className="cv-page">
      {/* ── Sticky Action Bar (no-print) ── */}
      <header className="cv-action-bar no-print">
        <div className="cv-action-inner">
          <button className="cv-back-btn" onClick={onBack} title="Return to portfolio">
            <svg className="cv-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to Portfolio</span>
          </button>

          <div className="cv-action-center">
            <div className="cv-doc-badge">
              <span className="cv-badge-dot"></span>
              <span className="cv-doc-name">Curriculum Vitae</span>
              <span className="cv-doc-pill">A4 Format</span>
            </div>
          </div>

          <div className="cv-action-right">
            <button className="cv-print-btn" onClick={printResume} title="Download or print resume as PDF">
              <svg className="cv-btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── CV Paper (A4, multi-page aware) ── */}
      <div className="cv-paper" id="resume-content">

        {/* ══ NAME & CONTACT ══ */}
        <div className="cv-header">
          <h1 className="cv-name">Ahmed Muhtasim Labib</h1>
          <div className="cv-contacts">
            <span>
              <a href="mailto:muhtasimlabib52@gmail.com">muhtasimlabib52@gmail.com</a>
            </span>
            <span>
              <a href="tel:+8801307663761">+880 1307-663761</a>
            </span>
            <span> MU, Sylhet, Bangladesh</span>
          </div>
        </div>

        {/* ══ SUMMARY ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Summary</h2>
          <hr className="cv-rule" />
          <p className="cv-skill-line">
            Computer Science undergraduate at Metropolitan University with a strong foundation in
            full-stack web development, machine learning, and competitive programming. Proven ability to design and ship
            end-to-end systems, from a fully self-hosted competitive programming judge to real-time academic management
            platforms and production-grade deep learning models. Recognized for translating complex problems into clean,
            efficient, and maintainable software solutions.
          </p>
        </div>

        {/* ══ PROFILES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Profiles</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line">
              <strong>GitHub:</strong> <a href="https://github.com/muhhtasim" target="_blank" rel="noopener noreferrer">github.com/muhhtasim</a>
              &emsp;<strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pore-dite-hobe/" target="_blank" rel="noopener noreferrer">linkedin.com/in/pore-dite-hobe</a>
              &emsp;<strong>Kaggle:</strong> <a href="https://www.kaggle.com/muhtasimahmed52" target="_blank" rel="noopener noreferrer">kaggle.com/muhtasimahmed52</a>
            </p>
            <p className="cv-skill-line">
              <strong>Codeforces:</strong> <a href="https://codeforces.com/profile/pore dibo" target="_blank" rel="noopener noreferrer">codeforces.com/profile/pore dibo</a>
              &emsp;<strong>CodeChef:</strong> <a href="https://www.codechef.com/users/pore dibo" target="_blank" rel="noopener noreferrer">codechef.com/users/pore dibo</a>
              &emsp;<strong>LeetCode:</strong> <a href="https://leetcode.com/u/pore dibo/" target="_blank" rel="noopener noreferrer">leetcode.com/u/pore dibo</a>
            </p>
          </div>
        </div>

        {/* ══ EDUCATION ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Education</h2>
          <hr className="cv-rule" />

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Metropolitan University (MU)</strong>
              <span className="cv-entry-date">January 2024 – December 2027</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">B.Sc. in Computer Science &amp; Engineering</em>
              <em className="cv-entry-sub cv-right">CGPA 3.84 / 4.00</em>
            </div>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Dakshin Surma &amp; College</strong>
              <span className="cv-entry-date">2020 – 2022</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Higher Secondary Certificate (HSC) — Science Group</em>
              <em className="cv-entry-sub cv-right"></em>
            </div>
          </div>

          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-org">Bangladesh Bank School</strong>
              <span className="cv-entry-date">2018 – 2020</span>
            </div>
            <div className="cv-entry-row">
              <em className="cv-entry-sub">Secondary School Certificate (SSC) — Science Group</em>
              <em className="cv-entry-sub cv-right"></em>
            </div>
          </div>
        </div>

        {/* ══ TECHNICAL SKILLS ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Technical Skills</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line">
              <strong>Languages:</strong> C++, Python, JavaScript (ES6+), PHP, SQL, HTML, CSS
            </p>
            <p className="cv-skill-line">
              <strong>Frameworks &amp; Libraries:</strong> React.js, Node.js, Express.js, Laravel, Socket.io, Vite
            </p>
            <p className="cv-skill-line">
              <strong>Machine Learning:</strong> TensorFlow, Keras, Scikit-learn, Pandas, NumPy, Matplotlib
            </p>
            <p className="cv-skill-line">
              <strong>Databases:</strong> MySQL, PostgreSQL, Eloquent ORM
            </p>
            <p className="cv-skill-line">
              <strong>Tools &amp; Platforms:</strong> Git, GitHub, Linux, Docker, VS Code, Kaggle, npm, Composer
            </p>
            <p className="cv-skill-line">
              <strong>Concepts:</strong> Data Structures &amp; Algorithms, OOP, REST APIs, JWT Auth, Queue Workers, CI/CD
            </p>
          </div>
        </div>

        {/* ══ PROJECTS ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Projects</h2>
          <hr className="cv-rule" />

          {/* JudgeMate */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">JudgeMate — Competitive Programming Judge</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/kaj sesh hole dibo   " target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Laravel 12, PHP, MySQL, Queue Workers, REST API</p>
            <ul className="cv-bullets">
              <li>Engineered a self-hosted online judge supporting C++, Python, and Java, with asynchronous code evaluation across isolated, sandboxed queue workers.</li>
              <li>Designed role-based access control (Admin / Problem Setter / Contestant) with real-time scoreboards and automated contest syncing from Codeforces, AtCoder, and CodeChef.</li>
            </ul>
          </div>

          {/* Ed-Tech */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Ed-Tech — Online Programming Learning Platform</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/muhhtasim/Ed-Tech-" target="_blank" rel="noopener noreferrer" style={{ fontSize: '9pt', color: '#555' }}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">HTML, CSS, JavaScript, Node.js, Express.js, MySQL</p>
            <ul className="cv-bullets">
              <li>Developed an online programming learning platform with course enrollment, learning resources, progress tracking, and personalized user dashboards.</li>
              <li>Implemented authentication, course search and filtering, and role-based course management features for instructors and administrators using Node.js, Express.js, and MySQL.</li>
            </ul>
          </div>

          {/* Autonomous Navigation Car */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Autonomous Navigation Car</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/muhhtasim/Autonomous-Navigation-Car" target="_blank" rel="noopener noreferrer" style={{ fontSize: '9pt', color: '#555' }}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Arduino, C++, Ultrasonic Sensor, Servo Motor, Motor Driver</p>
            <ul className="cv-bullets">
              <li>Built an Arduino-based autonomous 4WD vehicle capable of detecting obstacles and navigating around them using an ultrasonic sensor.</li>
              <li>Implemented servo-based path scanning and motor control logic to identify alternate routes and perform autonomous obstacle avoidance.</li>
            </ul>
          </div>

          {/* GymPilot SaaS */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">GymPilot SaaS — Gym Management Platform</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/muhhtasim/GymPilot-SaaS" target="_blank" rel="noopener noreferrer" style={{ fontSize: '9pt', color: '#555' }}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">JavaScript, Node.js, Backend, SaaS, Database</p>
            <ul className="cv-bullets">
              <li>Designed a SaaS-based gym management platform to centralize member management, workout programs, and day-to-day fitness business operations.</li>
              <li>Structured backend and database workflows to support scalable management of gym members, fitness programs, and operational records.</li>
            </ul>
          </div>

          {/* FlappyBirds */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Birds Game — FlappyBirds</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/muhhtasim/Birds-Game-FlappyBirds-" target="_blank" rel="noopener noreferrer" style={{ fontSize: '9pt', color: '#555' }}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Java, Swing, AWT, Game Loop, Graphics</p>
            <ul className="cv-bullets">
              <li>Developed a Java-based remake of the classic Flappy Bird game using Swing and AWT with custom graphics and a real-time game loop.</li>
              <li>Implemented randomly generated obstacles, collision detection, score tracking, game-over handling, restart functionality, and keyboard controls.</li>
            </ul>
          </div>

          {/* MedSearch Pro */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">MedSearch Pro — Medicine Search Application</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/muhhtasim/MedSearch-Pro-JavaSwing-" target="_blank" rel="noopener noreferrer" style={{ fontSize: '9pt', color: '#555' }}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Java, Java Swing, HashMap, CSV Parsing, Regex</p>
            <ul className="cv-bullets">
              <li>Developed a high-performance Java Swing medicine search application capable of loading and processing more than 50,000 medicine records from CSV data.</li>
              <li>Implemented HashMap-based in-memory indexing, regex-powered search, and smart data aggregation for fast and efficient medicine lookup.</li>
            </ul>
          </div>

          {/* Calculator */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Calculator — Java Desktop Application</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/muhhtasim/java_project_for_lab_calculator" target="_blank" rel="noopener noreferrer" style={{ fontSize: '9pt', color: '#555' }}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">Java, GUI, Arithmetic, Desktop Application</p>
            <ul className="cv-bullets">
              <li>Developed a Java-based desktop calculator as a laboratory project with a simple graphical user interface for common arithmetic operations.</li>
              <li>Implemented interactive input handling and arithmetic functionality to provide a straightforward desktop calculation experience.</li>
            </ul>
          </div>

          {/* Portfolio Website */}
          <div className="cv-entry">
            <div className="cv-entry-row">
              <strong className="cv-entry-proj">Personal Portfolio Website</strong>
              <span className="cv-entry-date">
                <a href="https://github.com/muhhtasim/Portfolio-Website" target="_blank" rel="noopener noreferrer" style={{fontSize:'9pt', color:'#555'}}>GitHub</a>
              </span>
            </div>
            <p className="cv-proj-tech">React, Vite, JavaScript, CSS3, Canvas API</p>
            <ul className="cv-bullets">
              <li>Developed a high-performance personal portfolio with an interactive constellation star map of skills, a light/dark theme engine, and smooth scroll transitions.</li>
            </ul>
          </div>

          
        </div>


        {/* ══ ACHIEVEMENTS ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Achievements</h2>
          <hr className="cv-rule" />
          <ul className="cv-bullets">
            <li><strong>17th Place</strong>, <strong>National Mathematics Olympiad 2022</strong> — recognized among top participants at the national level.</li>
            <li><strong>Regional Winner</strong>, <strong>Bangladesh Mathematical Olympiad</strong> — achieved recognition through competitive mathematical problem solving.</li>
            <li><strong>Hult Prize OnCampus 2024–25</strong> — participated in a global student entrepreneurship and social innovation competition.</li>
            <li><strong>Codeforces</strong> — Max Rating 1185 &nbsp;·&nbsp; <strong>CodeChef</strong> — 2-Star.</li>
          </ul>
        </div>


        {/* ══ CLUB & ACTIVITIES ══ */}
         <div className="cv-section">
           <h2 className="cv-section-heading">Club &amp; Activities</h2>
           <hr className="cv-rule" />

            {/* CSE Society */}
            <div className="cv-entry">
              <div className="cv-entry-row">
                <strong className="cv-entry-org">CSE SOCIETY | Metropolitan University CSE Society</strong>
                <span className="cv-entry-date">2026 – Present</span>
              </div>
              <div className="cv-entry-row">
                <em className="cv-entry-sub">E-Sports Secretary · Organizing Committee</em>
              </div>
              <ul className="cv-bullets">
                <li>Serving on the Organizing Committee as E-Sports Secretary, coordinating esports activities, tournaments, workshops, and student engagement initiatives within the CSE community.</li>
              </ul>
            </div>

            {/* MUSC */}
            <div className="cv-entry">
              <div className="cv-entry-row">
                <strong className="cv-entry-org">MUSC | Metropolitan University Sports Club</strong>
                <span className="cv-entry-date">2026 – Present</span>
              </div>
              <div className="cv-entry-row">
                <em className="cv-entry-sub">E-Sports Coordinator · Organizing Committee</em>
              </div>
              <ul className="cv-bullets">
                <li>Coordinating university esports tournaments and competitive gaming events, supporting tournament operations, scheduling, refereeing, and participant management.</li>
              </ul>
            </div>

            {/* EducationUSA */}
            <div className="cv-entry">
              <div className="cv-entry-row">
                <strong className="cv-entry-org">EducationUSA Bangladesh Spring 2025 Fair</strong>
                <span className="cv-entry-date">2025 – 2026</span>
              </div>
              <div className="cv-entry-row">
                <em className="cv-entry-sub">Volunteer Coordinator · Organizing Committee</em>
              </div>
              <ul className="cv-bullets">
                <li>Coordinated volunteers, participant guidance, event logistics, and on-ground operations for the EducationUSA Bangladesh Spring 2025 Fair.</li>
              </ul>
            </div>

            {/* VBD */}
            <div className="cv-entry">
              <div className="cv-entry-row">
                <strong className="cv-entry-org">VBD | Volunteers for Bangladesh</strong>
                <span className="cv-entry-date">2025 – 2026</span>
              </div>
              <div className="cv-entry-row">
                <em className="cv-entry-sub">Committee Member · Organizing Committee</em>
              </div>
              <ul className="cv-bullets">
                <li>Contributing to youth-led volunteer initiatives, community engagement activities, and social impact programs through collaborative event coordination.</li>
              </ul>
            </div>
          </div>

      {/* ══ EXPERIENCE ══ */}
          <div className="cv-section">
            <h2 className="cv-section-heading">Experience</h2>
            <hr className="cv-rule" />

            {/* Udvash */}
            <div className="cv-entry">
              <div className="cv-entry-row">
                <strong className="cv-entry-org">Udvash Academic &amp; Admission Care</strong>
                <span className="cv-entry-date">2023 – Present</span>
              </div>

              <div className="cv-entry-row">
                <em className="cv-entry-sub">Physics &amp; Mathematics Teacher</em>
              </div>

              <ul className="cv-bullets">
                <li>Teach Physics and Mathematics to academic and admission-level students, focusing on conceptual understanding, problem solving, and exam preparation.</li>
                <li>Prepare and evaluate academic materials, solve challenging problems, and support students in strengthening their analytical and quantitative skills.</li>
              </ul>
          </div>
        </div>


        {/* ══ LANGUAGES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Languages</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line"><strong>Bengali</strong> — Native &nbsp;|&nbsp; <strong>English</strong> — Professional Working Proficiency &nbsp;|&nbsp; <strong>Hindi</strong> — Conversational</p>
          </div>
        </div>

        {/* ══ HOBBIES ══ */}
        <div className="cv-section">
          <h2 className="cv-section-heading">Hobbies &amp; Interests</h2>
          <hr className="cv-rule" />
          <div className="cv-skills-block">
            <p className="cv-skill-line">Badminton, Playing Football, Watching Football, FIFA / Video Games</p>
          </div>
        </div>

      </div>
    </div>
  )
}
