import { FaGraduationCap, FaBuildingColumns, FaSchool } from 'react-icons/fa6'

const educationData = [
  {
    level: 'University',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Metropolitan University (MU)',
    location: 'Sylhet, Bangladesh',
    period: 'January 2024 – December 2027',
    grade: 'Ongoing · Batch 60th',
    icon: FaGraduationCap
  },
  {
    level: 'College (HSC)',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dakshin Surma College',
    location: 'Sylhet, Bangladesh',
    period: '2020 – 2022',
    //gpa pore dibo add
    grade: 'Science Group',
    icon: FaBuildingColumns
  },
  {
    level: 'School (SSC)',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Bangladesh Bank School',
    location: 'Sylhet Sadar, Sylhet',
    period: '2018 – 2020',
    //gpa pore dibo add ...GPA 4.74 / 5.00 · 
    grade: 'Science Group',
    icon: FaSchool
  }
]

export default function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        {/* Top Prominent Section Header */}
        <div className="education-header-top reveal-on-scroll">
          <h2 className="education-section-big-title">Education</h2>
          <p className="education-section-sub">Academic journey &amp; scholastic milestones</p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, i) => (
            <div key={i} className={`education-item reveal-on-scroll delay-${i + 1}`}>
              {/* Clean Minimalist Timeline Connector */}
              <div className="edu-connector">
                <div className="edu-dot">
                  <edu.icon className="edu-dot-svg" />
                </div>
                {i < educationData.length - 1 && (
                  <div className="edu-line" />
                )}
              </div>

              {/* Clean Refined Card with Design Shade */}
              <div className="education-card">
                <div className="edu-card-top-shade" />
                <div className="education-card-header">
                  <div className="edu-level-badge">
                    {edu.level}
                  </div>
                  <span className="edu-period">📅 {edu.period}</span>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <div className="edu-institution">
                  <span className="edu-inst-icon">🏛️</span>
                  <span>{edu.institution}</span>
                </div>
                <div className="edu-location">
                  <span>📍 {edu.location}</span>
                  <span className="edu-grade-badge">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
