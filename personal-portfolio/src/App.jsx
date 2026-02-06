import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Projects from "./pages/projects"
import ProjectDetail from "./pages/projectDetail"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

