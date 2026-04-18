import Navbar from "../components/Navbar.jsx"
import Hero from '../components/Hero'
import BackgroundHero2 from '../assets/images/servicos/hero.png';

function Home() {
  return (
    <div className="home-container">
     
      <Navbar /> 
        <div className="servicos">
          <Hero 
            imagem={BackgroundHero2} 
            titulo="Nossos Serviços" 
          />
        </div>
    </div>
  )
}

export default Home;