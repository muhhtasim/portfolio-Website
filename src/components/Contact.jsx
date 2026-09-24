import { useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaLocationDot
} from 'react-icons/fa6'

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'muhtasimlabib52@gmail.com',
    href: 'mailto:muhtasimlabib52@gmail.com',
    color: '#ea4335'
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+880 1307663761',
    href: 'https://wa.me/8801307663761',
    color: '#25d366'
  },
  {
    //pore dite hobe
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'Ahmed Muhtasim Labib',
    href: 'https://www.linkedin.com/in/pore dite hobe/',
    color: '#0a66c2'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'muhhtasim',
    href: 'https://github.com/muhhtasim',
    color: '#8b949e'
  },
  {
    icon: FaLocationDot,
    label: 'Location',
    value: 'MU, Sylhet, Bangladesh',
    href: null,
    color: '#06b6d4'
  }
]

const socialLinks = [
  {
    icon: FaFacebookF,
    href: 'https://www.facebook.com/share/18m6JS3pFq/',
    label: 'Facebook',
    color: '#1877f2'
  },
  {
    icon: FaInstagram,
    href: 'https://www.instagram.com/muhtasim.11_?stkn=dXJoZTcyeWhsMnlx',
    label: 'Instagram',
    color: '#e4405f'
  },
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/pore dite hobe/',
    label: 'LinkedIn',
    color: '#0a66c2'
  },
  {
    icon: FaGithub,
    href: 'https://github.com/muhhtasim',
    label: 'GitHub',
    color: '#ffffff'
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/8801307663761',
    label: 'WhatsApp',
    color: '#25d366'
  },
  {
    icon: FaEnvelope,
    href: 'mailto:muhtasimlabib52@gmail.com',
    label: 'Email',
    color: '#ea4335'
  }
]


// ─────────────────────────────────────────────────────────────
//  EmailJS Setup (https://www.emailjs.com)
//  1. Create a FREE account at emailjs.com
//  2. Add a Gmail service → copy the Service ID below
//  3. Create an Email Template with variables:
//       {{from_name}}  {{from_email}}  {{message}}
//     Set "To Email" to muhtasimlabib52@gmail.com
//  4. Copy your Template ID and Public Key below
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // e.g. 'template_xyz456'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // e.g. 'aBcDeFgHiJkLmNoP'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'muhtasimlabib52@gmail.com'
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-header-top reveal-on-scroll">
          <h2 className="contact-section-big-title">Get In Touch</h2>
          <p className="contact-section-sub">
            Open to internships, AI/ML research, software collaborations, and competitive programming initiatives. Feel free to reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left - Info */}
          <div className="contact-info-col">
            <div className="contact-info">
              {contactItems.map(item => (
                <div key={item.label} className="contact-item">
                  <div className="contact-icon" style={{ borderColor: `${item.color}40`, color: item.color }}>
                    <item.icon />
                  </div>
                  <div className="contact-item-text">
                    <h4>{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer">
                        {item.value}
                      </a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social-block">
              <p className="contact-social-heading">
                Connect on Social Networks:
              </p>
              <div className="social-links">
                {socialLinks.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={s.label}
                    title={s.label}
                    style={{ '--hover-color': s.color }}
                  >
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                id="contact-name"
                type="text"
                placeholder="John Doe"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn-submit"
              disabled={status === 'sending'}
              style={{
                background:
                  status === 'sent'
                    ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                    : status === 'error'
                    ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                    : 'var(--gradient-hero)',
                opacity: status === 'sending' ? 0.75 : 1,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer'
              }}
            >
              {status === 'sending' && '⏳ Sending...'}
              {status === 'sent'    && '✓ Message Sent!'}
              {status === 'error'   && '✕ Failed — Try WhatsApp'}
              {status === 'idle'    && 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
