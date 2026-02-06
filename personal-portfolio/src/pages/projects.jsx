import { Link } from 'react-router-dom'
import '../styles/projects.css'
import hugeBlobSvg from '../assets/huge_blob.svg'

export default function Projects() {
  // Template project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project Title 1",
      description: "A brief description of your project goes here. Explain what it does and what technologies you used.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#",
      image: null
    },
    {
      id: 2,
      title: "Project Title 2",
      description: "A brief description of your project goes here. Explain what it does and what technologies you used.",
      technologies: ["Python", "Flask", "PostgreSQL"],
      link: "#",
      image: null
    },
    {
      id: 3,
      title: "Project Title 3",
      description: "A brief description of your project goes here. Explain what it does and what technologies you used.",
      technologies: ["JavaScript", "Express", "MySQL"],
      link: "#",
      image: null
    },
    {
      id: 4,
      title: "Project Title 4",
      description: "A brief description of your project goes here. Explain what it does and what technologies you used.",
      technologies: ["Vue.js", "Firebase", "Tailwind"],
      link: "#",
      image: null
    }
  ]

  return (
    <div className="projects">
      {/* Header with huge blob background */}
      <div className="projects-header">
        <img src={hugeBlobSvg} alt="" className="huge-blob" />
        <nav className="projects-nav">
          <Link to="/" className="back-link">← Home</Link>
        </nav>
      </div>

      {/* Projects grid */}
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder">
                    <span>Image</span>
                  </div>
                )}
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
