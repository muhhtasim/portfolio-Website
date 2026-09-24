import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa6'

export default function Footer({ onViewResume }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#hero" className="navbar-brand-badge" aria-label="Home">
              <div className="brand-logo-icon">
                <span className="brand-icon-letter">L</span>
                <span className="brand-pulse-dot" />
              </div>
              <span className="brand-name-text">
                Labib<span className="brand-dot">.</span>
              </span>
            </a>
            <p className="footer-tagline">
              CSE Undergrad @ MU · Competitive Programmer · AI/ML Enthusiast
            </p>
          </div>

          <div className="footer-social-strip">
            <a
              href="https://github.com/muhhtasim"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/pore dite hobe/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/share/18m6JS3pFq/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Facebook"
              title="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/muhtasim.11_?stkn=dXJoZTcyeWhsMnlx"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
              title="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/8801307663761"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:muhtasimlabib52@gmail.com"
              className="footer-social-btn"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#clubs">Clubs</a>
            <button
              onClick={onViewResume}
              className="footer-resume-link"
            >
              Resume ↗
            </button>
          </div>
        </div>

        <div className="footer-bottom-line">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Ahmed Muhtasim Labib. All rights reserved.
          </p>
          <p className="footer-credit">
            Built with React, Vite &amp; Vanilla CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
