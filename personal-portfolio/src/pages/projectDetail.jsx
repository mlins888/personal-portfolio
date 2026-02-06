import { useParams, Link } from 'react-router-dom'
import '../styles/projectDetail.css'

// Import all project images
import aucGridImg from '../assets/proj_media/auc_grid.png'
import hackdukeImg from '../assets/proj_media/hackduke_site.png'
import gameCardsImg from '../assets/proj_media/game_cards.png'
import gameBoardImg from '../assets/proj_media/board.png'
import egGridImg from '../assets/proj_media/egs_grid.png'
import egSiteImg from '../assets/proj_media/egs_site_wip.png'
import rotoVid from '../assets/proj_media/rotovid.MP4'
import sayonaraVid from '../assets/proj_media/Sayonara.mp4'
import waterImg from '../assets/proj_media/water.jpg'
import charcoalImg from '../assets/proj_media/charcoal.jpg'
import filscherImg from '../assets/proj_media/Filscher_Concept.jpg'
import rosalinaImg from '../assets/proj_media/Rosalina_Concept.jpg'
import vrImg from '../assets/proj_media/vr.JPG'
import boatImg from '../assets/proj_media/boat.jpg'
import taylorImg from '../assets/proj_media/taylor.jpg'
import crowImg from '../assets/proj_media/crow.jpg'
import bandsImg from '../assets/proj_media/bands.png'
import fblaImg from '../assets/proj_media/flba.png'
import rollImg from '../assets/proj_media/roll.png'
import stemImg from '../assets/proj_media/stemnight.png'
import tsaImg from '../assets/proj_media/tsa.png'
import postCard1Img from '../assets/proj_media/1.png'
import postCard2Img from '../assets/proj_media/2.png'
import busCard1Img from '../assets/proj_media/card_1.png'
import busCard2Img from '../assets/proj_media/card_2.png'
import folderImg from '../assets/proj_media/folder_cover.png'
import brochure1Img from '../assets/proj_media/brochure_1.png'
import brochure2Img from '../assets/proj_media/brochure_2.png'
import coastersImg from '../assets/proj_media/coasters(sheet).png'

export default function ProjectDetail() {
  const { id } = useParams()

  // Helper function to check if file is a video
  const isVideo = (src) => {
    const videoExtensions = ['.mp4', '.MP4', '.mov', '.MOV', '.webm', '.ogg']
    return videoExtensions.some(ext => src.endsWith(ext))
  }

  // Project data with galleries
  const projectsData = {
    1: {
      title: "Aldan Union Church Marketing",
      description: "All four years of high school, I designed 50+ digital/physical works for nonprofit events hosted by my local church, including brochures for conferences hosting missionaries from around the world.",
      technologies: ["Graphic Design", "Social Media", "Marketing", "Canva"],
      images: [aucGridImg]
    },
    2: {
      title: "HackDuke Website",
      description: "This year, I collaborated with a team of designers to create the Hackduke website for 2026. Features I created included some assets for shelf items, design of fridge layout, part of schedule design, faq layout, and sponsors layout.",
      technologies: ["Graphic Design", "Figma"],
      images: [hackdukeImg]
    },
    3: {
      title: "Board Game Design",
      description: "In the fall semester, I worked with a team to create a fantasy-themed board game. I designed all of the game's cards and the board.",
      technologies: ["Figma", "Game Design"],
      images: [gameCardsImg, gameBoardImg]
    },
    4: {
      title: "EGMinistries Design & Marketing",
      description: "This past year, I started working with a ministry local to where I live in Pennsylvania to help them revamp their social media presence and their website. This one is still a work in progress, but I'm excited to keep working on it!",
      technologies: ["Web Design", "Figma", "Social Media", "Marketing"],
      images: [egGridImg, egSiteImg]
    },
    5: {
      title: "Personal Art",
      description: "This is a gallery of some of my personal visual art, concept art and animations.",
      technologies: ["Procreate", "OpenToonz", "Visual Art"],
      images: [rotoVid, sayonaraVid, waterImg, charcoalImg, filscherImg, rosalinaImg, vrImg, boatImg, taylorImg, crowImg]
    },
    6: {
      title: "Misc. Promotional Design",
      description: "Throughout high school, I created promotional materials for various clubs, including the Technology Student Association, Future Business Leaders of America, and marching band. It was a lot of social media marketing and some physical designs like t-shirts",
      technologies: ["Canva", "Graphic Design", "Social Media", "Marketing"],
      images: [rollImg, bandsImg, fblaImg, tsaImg, stemImg]
    }, 
    7: {
      title: "TSA Design Portfolio",
      description: "In 2025, I competed in a TSA graphic design competition and created a branding concept for a fictional restauraunt. My portfolio placed high enough in the regional competition to move on to the state competition, although I regrettably couldn't compete further due to funding limitations.",
      technologies: ["Procreate", "Canva", "Branding", "Marketing"],
      images: [folderImg, brochure1Img, brochure2Img, busCard1Img, busCard2Img, coastersImg, postCard1Img, postCard2Img]
    }
  }

  const project = projectsData[id]

  if (!project) {
    return (
      <div className="project-detail">
        <div className="detail-header">
          <Link to="/projects" className="back-button">← Back to Projects</Link>
          <h1>Project not found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail">
      <div className="detail-header">
        <Link to="/projects" className="back-button">← Back to Projects</Link>
      </div>

      <div className="detail-content">
        <h1 className="detail-title">{project.title}</h1>
        <p className="detail-description">{project.description}</p>

        <div className="detail-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        <div className="image-gallery">
          {project.images.map((media, index) => (
            <div key={index} className="gallery-item">
              {isVideo(media) ? (
                <video
                  src={media}
                  controls
                  controlsList="nodownload"
                  className="gallery-video"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={media} alt={`${project.title} ${index + 1}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
