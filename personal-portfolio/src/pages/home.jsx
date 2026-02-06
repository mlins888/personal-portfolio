import { Link } from 'react-router-dom'
import '../styles/home.css'
import wideBlobSvg from '../assets/wide_blob.svg'
import tallBlobSvg from '../assets/tall_blob.svg'
import starSvg from '../assets/star.svg'

export default function Home() {
  return (
    <div className="home">
      <img src={wideBlobSvg} alt="" className="blob blob-wide" />
      <img src={tallBlobSvg} alt="" className="blob blob-tall" />

      <nav className="nav">
        <Link to="/projects" className="nav-link">Projects</Link>
      </nav>

      <div className="content">
        <h1 className="name">Makenna Linsky</h1>
        <div className="line"></div>

        <img src={starSvg} alt="" className="star star-1" />
        <img src={starSvg} alt="" className="star star-2" />
        <img src={starSvg} alt="" className="star star-3" />

        <h2 className="title">Portfolio</h2>
      </div>
    </div>
  )
}
