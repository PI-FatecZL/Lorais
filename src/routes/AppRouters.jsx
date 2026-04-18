import { Routes, Route } from "react-router-dom"

// 1. Primeiro, importe todas as suas páginas
import Home from "../pages/Home.jsx"


function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />        
      <Route path="/home" element={<Home />} />     
    </Routes>
  )
}

export default AppRouters