const experiences = [
  {
    title: 'Full-Stack Developer (Academic Project Lead)',
    company: 'CampusHive Platform',
    period: 'Jun 2026 – Jul 2026',
    desc: 'Architected and developed a comprehensive academic management platform from scratch. Led the full-stack implementation including real-time quiz systems, role-based portals for Admin/Teacher/Student, and the LabTrack submission & grading system.',
    skills: ['React', 'Node.js', 'Socket.io', 'MySQL', 'Express', 'JWT Auth', 'REST APIs']
  },
  {
    title: 'Backend Engineer',
    company: 'JudgeMate - Competitive Judge Platform',
    period: 'Jul 2026 – Sep 2026',
    desc: 'Designed and built a production-ready competitive programming judge with async queue-based code evaluation supporting C++, Python, and Java. Implemented role-based access control, live scoreboards, badge systems, and external contest synchronization from Codeforces/AtCoder/CodeChef.',
    skills: ['Laravel 12', 'PHP', 'Queue Workers', 'MySQL', 'Blade', 'API Integration', 'Redis']
  },
  {
    title: 'Robotics Software Developer',
    company: 'Niryo Robot Project',
    period: 'Jul 2026 – Sep 2026',
    desc: 'Developed Python-based control software for the Niryo robotic arm. Implemented precise movement sequences, automated pick-and-place tasks, and camera-assisted object detection for robotic manipulation tasks.',
    skills: ['Python', 'pyniryo SDK', 'ROS', 'OpenCV', 'Robotics', 'Computer Vision']
  },
  {
    title: 'Database Designer',
    company: 'GarmentGuard DB System',
    period: 'Jul 2026',
    desc: 'Designed and implemented a relational database schema for garment industry management. Created stored procedures, views, and triggers for inventory tracking, production management, and quality control workflows.',
    skills: ['MySQL', 'PHP/Laravel', 'SQL', 'Database Design', 'Normalization']
  },
  {
    title: 'Competitive Programmer',
    company: 'Self-driven — Codeforces / AtCoder / CodeChef',
    period: '2025 – Present',
    desc: 'Actively solving algorithmic problems across competitive programming platforms. Focused on mastering advanced data structures, dynamic programming, graph algorithms, and mathematical problem solving in C++.',
    skills: ['C++17', 'STL', 'Algorithms', 'DP', 'Graph Theory', 'Binary Search', 'Segment Tree']
  }
]

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <span className="section-tag">My Journey</span>
        <h2 className="section-title">Experience & Projects</h2>
        <p className="section-subtitle">
          A timeline of my development journey — from web platforms to robotics.
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">📅 {exp.period}</span>
                </div>

                <p className="experience-desc">{exp.desc}</p>

                <div className="experience-skills">
                  {exp.skills.map(skill => (
                    <span key={skill} className="experience-skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
