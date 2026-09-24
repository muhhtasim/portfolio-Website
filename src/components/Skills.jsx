import { useEffect, useRef, useState } from 'react'
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiCplusplus,
  SiC,
  SiOpenjdk,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiDocker,
  SiLinux,
  SiGit,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPhp,
  SiAndroid
} from 'react-icons/si'
import { FaCss3Alt, FaJava } from 'react-icons/fa6'

// Expanded, interconnected constellation nodes covering Labib's complete skill stack
const techNodes = [
  // AI, ML, Computer Vision
  { id: 'python', label: 'Python', Icon: SiPython, x: 7.6, y: 25.0, color: '#3776ab', category: 'Language / AI' },
  { id: 'pandas', label: 'Pandas', Icon: SiPandas, x: 5.5, y: 41.0, color: 'rgba(0, 94, 255, 1)', category: 'Data Science' },
  { id: 'pytorch', label: 'PyTorch', Icon: SiPytorch, x: 27.5, y: 72.0, color: '#ee4c2c', category: 'Deep Learning / NLP' },
  { id: 'tensorflow', label: 'TensorFlow', Icon: SiTensorflow, x: 20.0, y: 78.0, color: '#ff6f00', category: 'Deep Learning' },
  { id: 'opencv', label: 'OpenCV', Icon: SiOpencv, x: 18.0, y: 22.0, color: '#5c3cfb', category: 'Computer Vision / Robotics' },
  { id: 'sklearn', label: 'Scikit-Learn', Icon: SiScikitlearn, x: 15.0, y: 68.0, color: '#f7931e', category: 'Machine Learning' },

  // Core Languages & Systems
  { id: 'java', label: 'Java', Icon: FaJava, x: 13.2, y: 40.0, color: '#ea2d2e', category: 'Language' },
  { id: 'cpp', label: 'C++', Icon: SiCplusplus, x: 9.4, y: 55.0, color: '#00599c', category: 'Algorithms / CP' },
  { id: 'c', label: 'C', Icon: SiC, x: 26.5, y: 49.5, color: '#1c2530ff', category: 'Systems / Embedded' },
  { id: 'php', label: 'PHP', Icon: SiPhp, x: 69.0, y: 77.0, color: '#777bb4', category: 'Backend' },

  // Frontend & Mobile
  { id: 'react', label: 'React', Icon: SiReact, x: 32.1, y: 16.5, color: '#61dafb', category: 'Frontend' },
  { id: 'next', label: 'Next.js', Icon: SiNextdotjs, x: 41.5, y: 14.0, color: '#1df500ff', category: 'Full-Stack' },
  { id: 'html5', label: 'HTML5', Icon: SiHtml5, x: 50.8, y: 16.5, color: '#e34f26', category: 'Frontend' },
  { id: 'css3', label: 'CSS3', Icon: FaCss3Alt, x: 42.5, y: 29.5, color: '#264de4', category: 'Frontend' },
  { id: 'tailwind', label: 'Tailwind CSS', Icon: SiTailwindcss, x: 50.5, y: 35.0, color: '#06b6d4', category: 'Styling' },
  { id: 'ts', label: 'TypeScript', Icon: SiTypescript, x: 58.2, y: 23.5, color: '#3178c6', category: 'Language / Frontend' },
  { id: 'js', label: 'JavaScript', Icon: SiJavascript, x: 77.8, y: 13.0, color: '#f7df1e', category: 'Language / Full-Stack' },
  { id: 'flutter', label: 'Flutter', Icon: SiFlutter, x: 40.5, y: 58.5, color: '#02569b', category: 'Mobile App' },
  { id: 'android', label: 'Android', Icon: SiAndroid, x: 67.0, y: 63.5, color: '#3ddc84', category: 'Mobile Dev' },

  // Backend, Cloud & Databases
  { id: 'node', label: 'Node.js', Icon: SiNodedotjs, x: 75.5, y: 44.5, color: '#339933', category: 'Backend Runtime' },
  { id: 'express', label: 'Express.js', Icon: SiExpress, x: 84.5, y: 48.0, color: '#3e9e98ff', category: 'Backend API' },
  { id: 'firebase', label: 'Firebase', Icon: SiFirebase, x: 67.6, y: 28.0, color: '#ffca28', category: 'Cloud / BaaS' },
  { id: 'postgres', label: 'PostgreSQL', Icon: SiPostgresql, x: 92.5, y: 21.0, color: '#008cffff', category: 'SQL Database' },
  { id: 'mysql', label: 'MySQL', Icon: SiMysql, x: 86.5, y: 31.0, color: '#0284c7', category: 'Relational DB' },
  { id: 'mongodb', label: 'MongoDB', Icon: SiMongodb, x: 81.0, y: 63.0, color: '#16a34a', category: 'NoSQL Database' },

  // DevOps & Tooling
  { id: 'docker', label: 'Docker', Icon: SiDocker, x: 57.8, y: 48.5, color: '#2496ed', category: 'DevOps / Containers' },
  { id: 'linux', label: 'Linux', Icon: SiLinux, x: 56.0, y: 67.0, color: '#f59e0b', category: 'Operating System' },
  { id: 'git', label: 'Git', Icon: SiGit, x: 47.0, y: 76.5, color: '#f05032', category: 'Version Control' }
]


// Constellation connections (edges between tech nodes)
const connections = [
  // AI & Data cluster
  ['python', 'pandas'],
  ['python', 'opencv'],
  ['python', 'java'],
  ['python', 'cpp'],
  ['python', 'c'],
  ['python', 'react'],
  ['pandas', 'sklearn'],
  ['sklearn', 'pytorch'],
  ['sklearn', 'tensorflow'],
  ['tensorflow', 'pytorch'],
  ['pytorch', 'c'],
  ['pytorch', 'git'],
  ['opencv', 'c'],
  ['opencv', 'react'],

  // Systems & Languages
  ['java', 'cpp'],
  ['java', 'c'],
  ['cpp', 'c'],
  ['c', 'flutter'],
  ['c', 'css3'],

  // Frontend cluster
  ['react', 'next'],
  ['react', 'css3'],
  ['react', 'html5'],
  ['react', 'flutter'],
  ['next', 'html5'],
  ['next', 'ts'],
  ['html5', 'css3'],
  ['html5', 'tailwind'],
  ['html5', 'ts'],
  ['css3', 'tailwind'],
  ['css3', 'flutter'],
  ['css3', 'ts'],
  ['tailwind', 'ts'],
  ['tailwind', 'docker'],
  ['ts', 'js'],
  ['ts', 'firebase'],
  ['ts', 'node'],
  ['ts', 'docker'],

  // Mobile & DevOps
  ['flutter', 'android'],
  ['flutter', 'git'],
  ['flutter', 'docker'],
  ['git', 'docker'],
  ['git', 'linux'],
  ['git', 'android'],
  ['linux', 'docker'],
  ['linux', 'android'],
  ['linux', 'php'],
  ['docker', 'android'],
  ['docker', 'node'],
  ['android', 'node'],
  ['android', 'php'],

  // Backend & Databases
  ['js', 'node'],
  ['js', 'firebase'],
  ['js', 'postgres'],
  ['firebase', 'node'],
  ['firebase', 'mysql'],
  ['node', 'express'],
  ['node', 'postgres'],
  ['node', 'mysql'],
  ['node', 'mongodb'],
  ['express', 'mongodb'],
  ['express', 'postgres'],
  ['mysql', 'postgres'],
  ['mysql', 'php'],
  ['mongodb', 'php']
]

export default function Skills() {
  const canvasRef = useRef(null)
  const [activeNode, setActiveNode] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId

    // Background particle stars
    const starCount = 75
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.25,
      speed: Math.random() * 0.00025 + 0.0001
    }))

    const resizeCanvas = () => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      canvas.width = rect.width
      canvas.height = rect.height
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const render = () => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // Detect theme for line & star contrast
      const isLight = document.documentElement.getAttribute('data-theme') === 'light'

      // 1. Draw drifting starry background
      stars.forEach((star) => {
        star.y -= star.speed
        if (star.y < 0) star.y = 1
        ctx.beginPath()
        ctx.arc(star.x * w, star.y * h, star.size, 0, Math.PI * 2)
        ctx.fillStyle = isLight
          ? `rgba(100, 116, 139, ${star.alpha * 0.6})`
          : `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()
      })

      // 2. Draw connecting constellation lines
      connections.forEach(([id1, id2]) => {
        const n1 = techNodes.find((n) => n.id === id1)
        const n2 = techNodes.find((n) => n.id === id2)
        if (!n1 || !n2) return

        const x1 = (n1.x / 100) * w
        const y1 = (n1.y / 100) * h
        const x2 = (n2.x / 100) * w
        const y2 = (n2.y / 100) * h

        const isHighlighted = activeNode && (activeNode.id === id1 || activeNode.id === id2)

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)

        if (isHighlighted) {
          ctx.strokeStyle = isLight ? 'rgba(109, 40, 217, 0.9)' : 'rgba(168, 85, 247, 0.8)'
          ctx.lineWidth = 1.8
        } else {
          ctx.strokeStyle = isLight ? 'rgba(71, 85, 105, 0.22)' : 'rgba(255, 255, 255, 0.09)'
          ctx.lineWidth = 0.9
        }
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [activeNode])

  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="skills-header-top reveal-on-scroll">
          <h2 className="skills-section-big-title">Skills &amp; Technologies</h2>
          <p className="skills-section-sub">
            Interactive constellation of core languages, AI frameworks, tools, and platforms
          </p>
        </div>

        {/* Constellation Star Map Container */}
        <div
          ref={containerRef}
          className="constellation-wrapper reveal-on-scroll"
          onMouseLeave={() => setActiveNode(null)}
        >
          {/* Canvas for connection lines & subtle stars */}
          <canvas ref={canvasRef} className="constellation-canvas" />

          {/* Render circular tech nodes */}
          {techNodes.map((node) => {
            const isActive = activeNode?.id === node.id
            const NodeIcon = node.Icon

            return (
              <div
                key={node.id}
                className={`constellation-node ${isActive ? 'is-active' : ''}`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`
                }}
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div
                  className="node-circle"
                  style={{
                    borderColor: isActive ? node.color : undefined,
                    boxShadow: isActive ? `0 0 28px ${node.color}` : undefined
                  }}
                >
                  <NodeIcon className="node-icon-svg" style={{ color: node.color }} />
                </div>
              </div>
            )
          })}

          {/* Active Node Detail Card Preview */}
          {activeNode && (
            <div className="constellation-tooltip">
              <span className="tooltip-category">{activeNode.category}</span>
              <strong className="tooltip-title">{activeNode.label}</strong>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
