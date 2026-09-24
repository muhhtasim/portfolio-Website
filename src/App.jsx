import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import ClubActivities from './components/ClubActivities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Resume from './components/Resume'
import ScrollTop from './components/ScrollTop'

function App() {
  const [page, setPage] = useState('home')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  // Scroll reveal animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    const revealElements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale'
    )
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [page])

  return (
    <>
      {page === 'resume' ? (
        <Resume onBack={() => setPage('home')} />
      ) : (
        <>
          <Navbar
            onNavigate={setPage}
            currentPage={page}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <Hero onViewResume={() => setPage('resume')} />
          <About />
          <Education />
          <Skills />
          <Projects />
          <ClubActivities />
          <Contact />
          <Footer onViewResume={() => setPage('resume')} />
          <ScrollTop />
        </>
      )}
    </>
  )
}

export default App
