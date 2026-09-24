import { SiKaggle, SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si'
import atcoderLogo from '../assets/atcoder_logo.png'

const researchFocusList = [
  {
    num: '01',
    title: 'Machine Learning (ML)',
    desc: 'Data-driven predictive modeling, tabular intelligence, and classical statistical learning.'
  },
  {
    num: '02',
    title: 'Deep Learning (DL)',
    desc: 'Artificial Neural Networks, backpropagation architectures, and representations using PyTorch.'
  },
  {
    num: '03',
    title: 'Natural Language Processing (NLP)',
    desc: 'Tokenization, syntax parsing, semantic analysis, and language understanding pipelines.'
  },
  {
    num: '04',
    title: 'Large Language Models (LLMs)',
    desc: 'Instruction-tuning, prompt engineering, RAG pipelines, and transformer architectures.'
  },
  {
    num: '05',
    title: 'Generative AI',
    desc: 'Diffusion models, synthetic generation, autonomous agent workflows, and creative systems.'
  },
  {
    num: '06',
    title: 'Vision-Language Models (VLMs)',
    desc: 'Multimodal perception, image-text alignment, visual reasoning, and grounded robotic vision.'
  }
]

export default function About() {
  return (
    <section className="section about-section-academic" id="about">
      <div className="container">
        {/* Top Prominent Section Header */}
        <div className="about-header-top reveal-on-scroll">
          <h2 className="about-section-big-title">About Me</h2>
        </div>

        {/* Main Two-Column Layout: Narrative on Left, Identity Card on Right */}
        <div className="about-main-layout">
          {/* Left: Introduction & Narrative */}
          <div className="about-left-content reveal-left">
            <h2 className="about-headline">
              Building intelligent systems, <br />
              <span className="accent-highlight">one idea at a time.</span>
            </h2>

            <div className="about-text-paragraphs">
              <p>
                Hi, I’m <strong className="text-highlight">Ahmed Muhtasim Labib</strong>, a Computer Science &amp; Engineering student at <strong className="text-highlight">Metropolitan University</strong> focusing on <span className="keyword-chip">Artificial Intelligence</span>, <span className="keyword-chip">Machine Learning</span>, <span className="keyword-chip">NLP</span>, <span className="keyword-chip">LLMs</span>, and <span className="keyword-chip">VLMs</span>. I specialize in turning research concepts into robust production code—spanning deep learning models, natural language architectures, and scalable <span className="keyword-chip">Full-Stack Development</span>.
              </p>

              <p>
                My current work centers on <span className="keyword-chip">AI/ML Research</span>, particularly large language models, vision-language systems, and <span className="keyword-chip">Robotics (Niryo Robotics)</span> utilizing Python pyniryo and ROS. Beyond research, my foundation in competitive programming (400+ problems solved) instills rigorous algorithmic discipline into everything I build.
              </p>
            </div>

            <div className="about-motto-box">
              <span className="motto-prefix">&gt; </span>
              <span className="motto-text">Build. Research. Experiment. Learn. Repeat.</span>
            </div>

            {/* Keyword Pills */}
            <div className="about-tags-row">
              <span className="academic-tag">[ AI / ML ]</span>
              <span className="academic-tag">[ NLP &amp; LLMs ]</span>
              <span className="academic-tag">[ VLMs ]</span>
              <span className="academic-tag">[ Niryo Robotics ]</span>
              <span className="academic-tag">[ Full-Stack ]</span>
            </div>
          </div>

          {/* Right: Researcher Identity Card */}
          <div className="about-right-card-wrapper reveal-right">
            <div className="researcher-identity-card">
              <div className="card-ambient-glow" />

              {/* Card Header & Code Accents */}
              <div className="card-top-bar">
                <div className="card-dots">
                  <span className="card-dot" />
                  <span className="card-dot" />
                  <span className="card-dot" />
                </div>
              </div>

              <div className="card-name-block">
                <h3 className="card-author-name">AHMED MUHTASIM LABIB</h3>
                <div className="card-author-sub">
                  <span>CSE</span>
                  <span className="dot-divider">•</span>
                  <span>MU</span>
                  <span className="dot-divider">•</span>
                  <span>Batch 60th</span>
                </div>
              </div>

              <div className="card-divider-line" />

              <div className="card-domains-list">
                <a
                  href="https://atcoder.jp/users/failure_soul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-item domain-link-item"
                >
                  <span className="domain-item-left">
                    <img
                      src={atcoderLogo}
                      alt="AtCoder"
                      className="domain-brand-icon atcoder-brand-logo"
                      style={{
                        width: '20px',
                        height: '20px',
                        objectFit: 'contain',
                        borderRadius: '3px',
                        background: '#ffffff',
                        padding: '1px'
                      }}
                    />
                    <span className="domain-label">AtCoder</span>
                  </span>
                  <span className="domain-link-arrow">↗</span>
                </a>
                <a
                  href="https://codeforces.com/profile/muhhtasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-item domain-link-item"
                >
                  <span className="domain-item-left">
                    {/* Official Codeforces 3-Color Vertical Bars Logo */}
                    <svg
                      className="domain-brand-icon"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: '18px', height: '18px' }}
                    >
                      <rect x="1.5" y="9" width="5" height="13.5" rx="1.5" fill="#ffd21f" />
                      <rect x="9.5" y="3" width="5" height="19.5" rx="1.5" fill="#2188ff" />
                      <rect x="17.5" y="6" width="5" height="16.5" rx="1.5" fill="#f44336" />
                    </svg>
                    <span className="domain-label">Codeforces</span>
                  </span>
                  <span className="domain-link-arrow">↗</span>
                </a>
                <a
                  href="https://www.codechef.com/users/muhhtasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-item domain-link-item"
                >
                  <span className="domain-item-left">
                    <SiCodechef className="domain-brand-icon" style={{ color: '#5b4638' }} />
                    <span className="domain-label">CodeChef</span>
                  </span>
                  <span className="domain-link-arrow">↗</span>
                </a>
                <a
                //pore dite hobe
                  href="https://leetcode.com/u/poredibo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="domain-item domain-link-item"
                >
                  <span className="domain-item-left">
                    <SiLeetcode className="domain-brand-icon" style={{ color: '#ffa116' }} />
                    <span className="domain-label">LeetCode</span>
                  </span>
                  <span className="domain-link-arrow">↗</span>
                </a>
              </div>

              <div className="card-divider-line" />

              <div className="card-status-block">
                <div className="status-indicator">
                  <span className="live-status-dot" />
                  <span className="status-label">Currently Exploring</span>
                </div>
                <div className="status-target">NLP, LLMs, VLMs &amp; Niryo Robotics</div>
              </div>

              <div className="card-bottom-actions">
                <a
                  href="https://github.com/muhhtasim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-action-link"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.kaggle.com/muhtasimahmed52"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-action-link"
                >
                  Kaggle ↗
                </a>
                <a
                //linkedin link pore dit hobe
                  href="https://www.linkedin.com/in/muhtasim-ahmed-52/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-action-link"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Research Focus Mini Section */}
        <div className="research-focus-section reveal-on-scroll">
          <div className="focus-header">
            <h3 className="focus-title">Research Focus</h3>
            <p className="focus-subtitle">Key areas of current investigation, experimentation, and applied systems.</p>
          </div>

          <div className="focus-grid">
            {researchFocusList.map((focus) => (
              <div key={focus.num} className="focus-card">
                <div className="focus-card-top">
                  <span className="focus-num">{focus.num}</span>
                  <span className="focus-accent-dot" />
                </div>
                <h4 className="focus-card-title">{focus.title}</h4>
                <p className="focus-card-desc">{focus.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
