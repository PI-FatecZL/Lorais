import './styles/App.css'
import AppRouters from "./routes/AppRouters.jsx"
import Navbar from './components/Navbar.jsx'
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouters />
    </BrowserRouter>
  )
}

export default App