import { useState, useEffect } from 'react'
import profileImg from '../assets/profile.jpg'

const roles = [
  'AI/ML Researcher',
  'NLP, LLM & VLM Explorer',
  'Niryo Robot Explorer',
  'Full-Stack Developer',
  'Generative AI Builder',
  'Competitive Programmer'
]

export default function Hero({ onViewResume }) {
  // Dynamic typing effect for roles
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const targetRole = roles[roleIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(targetRole.substring(0, currentText.length + 1))
        setTypingSpeed(80)

        if (currentText === targetRole) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setCurrentText(targetRole.substring(0, currentText.length - 1))
        setTypingSpeed(40)

        if (currentText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTypingSpeed(300)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex, typingSpeed])

  return (
    <section className="hero" id="hero">
      {/* Subtle Background Glow Orbs */}
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />

      <div className="container">
        <div className="hero-inner">
          {/* Left Content */}
          <div className="hero-content-left">
            <div className="hero-badge">
              <span className="dot" />
              Available for Research & Opportunities
            </div>

            <h1 className="hero-title">
              <span className="hero-greeting">Hi, I'm</span><br />
              <span className="hero-name-animated">
                <span className="name-line-1">
                  <span className="name-word" style={{ animationDelay: '0.15s' }}>Ahmed</span>{' '}
                  <span className="name-word" style={{ animationDelay: '0.28s' }}>Muhtasim</span>
                </span>
                <span className="name-line-2">
                  <span className="name-word" style={{ animationDelay: '0.42s' }}>Labib</span>
                </span>
              </span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="hero-dynamic-role-box">
              <span className="role-prefix">I am an </span>
              <span className="role-typed-wrap">
                <span className="role-typed-text">{currentText}</span>
                <span className="typing-cursor">|</span>
              </span>
            </div>

            <div className="hero-headline">
              <strong>CSE Student at MU · AI/ML Researcher · Full-Stack Developer</strong>
            </div>

            <p className="hero-subtitle">
              Exploring <strong>Artificial Intelligence, Machine Learning, NLP, LLMs, VLMs, Generative AI, and Niryo Robotics</strong> while building intelligent, scalable, and impactful systems.
            </p>

            {/* AI Research Focus Chips */}
            <div className="hero-focus-chips">
              <span className="focus-chip">🤖 AI / ML</span>
              <span className="focus-chip">💬 NLP & LLMs</span>
              <span className="focus-chip">👁️ VLMs</span>
              <span className="focus-chip">🦾 Niryo Robot</span>
              <span className="focus-chip">🌐 Full-Stack Dev</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                View My Work →
              </a>
              <button className="btn-secondary" onClick={onViewResume}>
                📄 My Resume
              </button>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">500+</div>
                <div className="hero-stat-label">Problems Solved</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">20+</div>
                <div className="hero-stat-label">Projects</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">8+</div>
                <div className="hero-stat-label">Languages</div>
              </div>
            </div>
          </div>

          {/* Right - Profile Image with interactive floating badges */}
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <div className="hero-image-glow" />
              <div className="hero-image-ring" />
              <div className="hero-image-ring-2" />
              <img
                src={profileImg}
                alt="Ahmed Muhtasim Labib - AI/ML Researcher & Full Stack Developer"
                className="hero-img"
              />

              {/* Floating badges on both sides */}
              <div className="hero-floating-badge hero-floating-badge-1">
                <span className="floating-icon">🧠</span>
                <div>
                  <div className="badge-title">AI/ML Researcher</div>
                  <div className="badge-subtitle">NLP · LLM · VLM</div>
                </div>
              </div>

              <div className="hero-floating-badge hero-floating-badge-2">
                <span className="floating-icon">💻</span>
                <div>
                  <div className="badge-title">Full-Stack Developer</div>
                  <div className="badge-subtitle">React · Node · Laravel</div>
                </div>
              </div>

              <div className="hero-floating-badge hero-floating-badge-3">
                <span className="floating-icon">🦾</span>
                <div>
                  <div className="badge-title">Niryo Robot & ROS</div>
                  <div className="badge-subtitle">6-Axis Arm · Vision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
