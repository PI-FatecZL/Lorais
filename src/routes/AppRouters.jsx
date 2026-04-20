import { Routes, Route } from "react-router-dom"

// 1. Primeiro, importe todas as suas páginas
import Home from "../pages/Home.jsx"
import Services from "../pages/Services.jsx"
import ServiceDetails from "../pages/ServiceDetails.jsx"

function AppRouters() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />  
        <Route path="/servicos" element={<Services />} />
        <Route path="/servicos/:id" element={<ServiceDetails />} />
      </Routes>
  
  )
}

export default AppRouters