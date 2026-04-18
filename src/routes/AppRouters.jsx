import { Routes, Route } from "react-router-dom"

// 1. Primeiro, importe todas as suas páginas
import Home from "../pages/Home.jsx"
import Servicos from "../pages/Servicos.jsx"
import ServicoDetails from "../pages/ServicoDetails.jsx"

function AppRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />  
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/servicos/:id" element={<ServicoDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters