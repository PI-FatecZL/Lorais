import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home.jsx"
import Servicos from "../pages/Servicos.jsx"

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters