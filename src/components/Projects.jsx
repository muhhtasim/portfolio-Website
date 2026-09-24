const projects = [
  {
    name: 'Ed-Tech',
    emoji: '🎓',
    description: 'An online programming learning platform with course enrollment, learning resources, progress tracking, user dashboards, authentication, search, filtering, and course management for instructors and administrators.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MySQL'],
    stars: 0,
    github: 'https://github.com/muhhtasim/Ed-Tech-',
    gradient: 'linear-gradient(135deg, #1a0a3e 0%, #2d1b6e 100%)',
    featured: true
  },
  {
    name: 'Autonomous Navigation Car',
    emoji: '🚗',
    description: 'An Arduino-based autonomous vehicle that detects obstacles with an ultrasonic sensor, scans alternate paths with a servo, and controls a 4WD motor system to navigate around obstacles.',
    tech: ['Arduino', 'C++', 'Ultrasonic Sensor', 'Servo Motor', 'Motor Driver'],
  stars: 0,
    github: 'https://github.com/muhhtasim/Autonomous-Navigation-Car',
  gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
  featured: true
},
  {
    name: 'GymPilot SaaS',
    emoji: '💪',
    description: 'A SaaS platform for managing gym operations, members, workout programs, and fitness business workflows through a centralized web application.',
    tech: ['JavaScript', 'Node.js', 'Backend', 'SaaS', 'Database'],
    stars: 0,
    github: 'https://github.com/muhhtasim/GymPilot-SaaS',
    gradient: 'linear-gradient(135deg, #0a2e1e 0%, #1e3a5f 100%)',
    featured: true
  },
  {
    name: 'Birds Game: FlappyBirds',
    emoji: '🐥',
    description: 'A Java remake of the classic Flappy Bird game with smooth animation, randomly generated pipes, score tracking, game-over handling, restart support, and keyboard controls.',
    tech: ['Java', 'Swing', 'AWT', 'Game Loop', 'Graphics'],
    stars: 0,
    github: 'https://github.com/muhhtasim/Birds-Game-FlappyBirds-',
    gradient: 'linear-gradient(135deg, #0a2a1e 0%, #0a1a2e 100%)',
    featured: true
  },
  {
    name: 'MedSearch Pro',
    emoji: '💊',
    description: 'A high-performance Java Swing medicine search application that loads more than 50,000 records from CSV and uses an in-memory HashMap for instant lookup and smart data aggregation.',
    tech: ['Java', 'Java Swing', 'HashMap', 'CSV Parsing', 'Regex'],
    stars: 0,
    github: 'https://github.com/muhhtasim/MedSearch-Pro-JavaSwing-',
    gradient: 'linear-gradient(135deg, #1a1a0a 0%, #2e1a0a 100%)',
    featured: true
  },
  {
    name: 'Lab Calculator',
    emoji: '🧮',
    description: 'A Java calculator project created for laboratory work, focused on implementing common arithmetic operations through a simple desktop application.',
    tech: ['Java', 'GUI', 'Arithmetic', 'Desktop Application'],
    stars: 0,
    github: 'https://github.com/muhhtasim/java_project_for_lab_calculator',
    gradient: 'linear-gradient(135deg, #1e1035 0%, #0d1b3e 100%)',
    featured: true
  },
  {
    name: 'Portfolio Website',
    emoji: '🌐',
    description: 'A responsive personal portfolio built with React and Vite, featuring animated sections, interactive skills visualization, light and dark themes, project highlights, and a resume view.',
    tech: ['React', 'Vite', 'JavaScript', 'CSS3', 'Canvas API'],
    stars: 0,
    github: 'https://github.com/muhhtasim/portfolioWebsite',
    gradient: 'linear-gradient(135deg, #0a251a 0%, #14352a 100%)',
    featured: true
  }
]

function ProjectBanner({ project }) {
  return (
    <div
      className="project-card-banner"
      style={{ background: project.gradient }}
    >
      <div style={{
        fontSize: '72px',
        filter: 'drop-shadow(0 4px 24px rgba(0,0,0,0.5))',
        animation: 'float 6s ease-in-out infinite'
      }}>
        {project.emoji}
      </div>
      {project.stars > 0 && (
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 10px',
          background: 'rgba(245, 158, 11, 0.2)',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          borderRadius: '50px',
          fontSize: '12px',
          color: '#f59e0b',
          fontWeight: 600
        }}>
          ⭐ {project.stars}
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        {/* Section Header matching About Me, Education & Skills */}
        <div className="projects-header-top reveal-on-scroll">
          <h2 className="projects-section-big-title">Featured Projects</h2>
          <p className="projects-section-sub">
            Real-world applications ranging from competitive programming judges to robotics control systems
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.name} className={`project-card reveal-on-scroll delay-${(i % 3) + 1}`}>
              <ProjectBanner project={project} />

              <div className="project-card-body">
                <div className="project-card-top">
                  <h3 className="project-name">{project.name}</h3>
                </div>

                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link project-link-primary"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href="https://github.com/muhhtasim"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Repositories →
          </a>
        </div>
      </div>
    </section>
  )
}
