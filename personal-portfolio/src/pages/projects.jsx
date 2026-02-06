import { Link } from 'react-router-dom'
import '../styles/projects.css'
import hugeBlobSvg from '../assets/huge_blob.svg'
import aucGridImg from '../assets/proj_media/auc_grid.png'
import hackdukeImg from '../assets/proj_media/hackduke_site.png'
import gameCardsImg from '../assets/proj_media/game_cards.png'
import egGridImg from '../assets/proj_media/egs_grid.png'
import waterImg from '../assets/proj_media/water.jpg'
import tsaImg from '../assets/proj_media/tsa.png'
import folderImg from '../assets/proj_media/folder_cover.png'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Aldan Union Church Marketing",
      description: "All four years of high school, I designed 50+ digital/physical works for nonprofit events hosted by my local church, including brochures for conferences hosting missionaries from around the world.",
      technologies: ["Graphic Design", "Social Media", "Marketing", "Canva"],
      linkType: "external", // external or internal
      link: "https://www.instagram.com/aldanunionchurch/",
      image: aucGridImg
    },
    {
      id: 2,
      title: "HackDuke Website",
      description: "This year, I collaborated with a team of designers to create the Hackduke website for 2026. Features I created included some assets for shelf items, design of fridge layout, part of schedule design, faq layout, and sponsors layout.",
      technologies: ["Graphic Design", "Figma"],
      linkType: "external",
      link: "https://2026.hackduke.org",
      image: hackdukeImg
    },
    {
      id: 3,
      title: "Board Game Design",
      description: "In the fall semester, I worked with a team to create a fantasy-themed board game. I designed all of the game's cards and the board.",
      technologies: ["Figma", "Game Design"],
      linkType: "internal", // Links to detail page with gallery
      image: gameCardsImg
    },
    {
      id: 4,
      title: "EGMinistries Design & Marketing",
      description: "This past year, I started working with a ministry local to where I live in Pennsylvania to help them revamp their social media presence and their website. We are a program devoted to supporting young girls in the greater Philly area by providing a safe space to learn and grow outside of home and school. This one is still a work in progress, but I'm excited to keep working on it!",
      technologies: ["Web Design", "Figma", "Social Media", "Marketing"],
      linkType: "internal",
      image: egGridImg
    },
    {
      id: 5,
      title: "Personal Art",
      description: "This is a gallery of some of my personal visual art, concept art and animations.",
      technologies: ["Procreate", "OpenToonz", "Visual Art"],
      linkType: "internal",
      image: waterImg
    },
    {
      id: 6,
      title: "Misc. Promotional Design",
      description: "Throughout high school, I created promotional materials for various clubs, including the Technology Student Association, Future Business Leaders of America, and marching band. It was a lot of social media marketing and some physical designs like t-shirts",
      technologies: ["Canva", "Graphic Design", "Social Media", "Marketing"],
      linkType: "internal",
      image: tsaImg
    },
    {
      id: 7,
      title: "TSA Design Portfolio",
      description: "In 2025, I competed in a TSA graphic design competition and created a branding concept for a fictional restauraunt. My portfolio placed high enough in the regional competition to move on to the state competition, although I regrettably couldn't compete further due to funding limitations.",
      technologies: ["Procreate", "Canva", "Branding", "Marketing"],
      linkType: "internal",
      image: folderImg
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

        <div className="header-description">
          <h1 className="header-title">About Me</h1>
          <p className="header-text">
            Hi! I'm Makenna, a programmer and designer passionate about creating meaningful visual experiences.
            I built this portfolio site to showcase my work in graphic design, web design, and visual art.
            (This site is still a WIP, and best viewed on computer)
          </p>
        </div>
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

                {project.linkType === "internal" ? (
                  <Link to={`/projects/${project.id}`} className="project-link">
                    View Gallery →
                  </Link>
                ) : (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
