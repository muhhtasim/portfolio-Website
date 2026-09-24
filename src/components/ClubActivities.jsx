import kmindsLogo from '../assets/TE510.jpg'
import hackLogo from '../assets/hack_logo.jpeg'
import sgipcLogo from '../assets/sgipc_logo.png'



//sob logo edit kora lagbe

const clubActivities = [
  {
    role: 'E-Sports Secretary',
    organization: 'CSE SOCIETY | Metropolitan University CSE Society',
    period: '2026 – Present',
    logo: kmindsLogo,
    color: '#00d2ff',
    category: 'Organizing Committee',
    desc: 'Serving on the Organizing Committee as E-Sports Secretary of CSE SOCIETY (Metropolitan University CSE Society). Driving workshops, AI study circles, competitive machine learning sessions, and data science community initiatives.',
    tags: ['Event Management', 'Tournament Organization', 'Community Leadership', 'Workshops']
  },
  {
    role: 'E-Sports Cordinator',
    organization: 'MUSC | Metropolitan University Sports Club',
    period: '2026 – Present',
    logo: hackLogo,
    color: '#00b4d8',
    category: 'Organizing Committee',
    desc: 'Serving on the Organizing Committee as E-Sports Cordinator for MUSC (Metropolitan University Sports Club). Coordinating embedded hardware events, robotics acceleration, Arduino/microcontroller sessions, and technical collaboration.',
    tags: ['Event Management', 'Tournament Organization', 'Community Leadership', 'Workshops']
  },
  {
    role: 'Volunteer Coordinator',
    organization: 'EducationUSA Bangladesh Spring 2025 Fair',
    period: '2025 – 2026',
    logo: sgipcLogo,
    color: '#a855f7',
    category: 'Organizing Committee',
    desc: 'Serving on the Organizing Committee as Volunteer Coordinator for the EducationUSA Bangladesh Spring 2025 Fair. Coordinating judge systems, contest logistics, test case verification, live scoreboards, and contestant support.',
    tags: ['Event Coordination', 'Student Guidance', 'Logistics Management', 'Team Collaboration']
  },
   {
    role: 'Comittee Member',
    organization: 'VBD | Volunteers for Bangladesh',
    period: '2025 – 2026',
    logo: sgipcLogo,
    color: '#a855f7',
    category: 'Organizing Committee',
    desc: 'Serving on the Organizing Committee as Committee Member for the Volunteers for Bangladesh Spring 2025 Fair. Coordinating judge systems, contest logistics, test case verification, live scoreboards, and contestant support.',
    tags: ['Volunteer Leadership', 'Youth Engagement', 'Social Impact', 'Team Collaboration']
  }
]

const categoryColors = {
  'Leadership / AI': { bg: 'rgba(0, 210, 255, 0.12)', border: 'rgba(0, 210, 255, 0.35)', text: '#00d2ff' },
  'Organizing Committee': { bg: 'rgba(0, 180, 216, 0.12)', border: 'rgba(0, 180, 216, 0.35)', text: '#00b4d8' },
  'Contest Management': { bg: 'rgba(168, 85, 247, 0.12)', border: 'rgba(168, 85, 247, 0.35)', text: '#c084fc' }
}

export default function ClubActivities() {
  return (
    <section className="section club-section" id="clubs">
      <div className="container">
        {/* Header aligned with About, Education, Skills, and Projects */}
        <div className="club-header-top reveal-on-scroll">
          <h2 className="club-section-big-title">Club &amp; Activities</h2>
          <p className="club-section-sub">
            Leadership roles, hardware innovation, AI communities, and competitive programming contest management
          </p>
        </div>

        <div className="club-grid">
          {clubActivities.map((activity, i) => {
            const catColor = categoryColors[activity.category]
            return (
              <div key={i} className={`club-card reveal-on-scroll delay-${i + 1}`} style={{ '--club-color': activity.color }}>
                {/* Top accent line */}
                <div className="club-card-accent" style={{ background: `linear-gradient(90deg, ${activity.color}, transparent)` }} />

                {/* Prominent Official Logo on Top */}
                <div className="club-logo-banner">
                  <div className="club-logo-img-wrap">
                    <img
                      src={activity.logo}
                      alt={activity.organization}
                      className="club-logo-img"
                    />
                  </div>
                </div>

                <div className="club-card-top-info">
                  <div className="club-category-badge">
                    {activity.category}
                  </div>
                  <span className="club-period">📅 {activity.period}</span>
                </div>

                <h3 className="club-role">{activity.role}</h3>
                <p className="club-org">
                  🏛️ {activity.organization}
                </p>
                <p className="club-desc">{activity.desc}</p>

                <div className="club-tags">
                  {activity.tags.map((tag, j) => (
                    <span key={j} className="club-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
