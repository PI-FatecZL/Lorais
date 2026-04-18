import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home.jsx"
import Servicos from "../pages/Servicos.jsx"

function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Home />} />
      <Route path="/servicos" element={<Home />} />
      <Route path="/contatos" element={<Home />} />
    </Routes>
  )
}

export default AppRouters