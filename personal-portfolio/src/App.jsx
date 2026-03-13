import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/main"
import ProjectDetail from "./pages/projectDetail"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

