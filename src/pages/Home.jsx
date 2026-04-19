import Navbar from "../components/Navbar.jsx"
import Hero from '../components/Hero'
import BackgroundHero2 from '../assets/images/home/hero_home.png';

function Home() {
  return (
    <div className="home-container">
     
      <Navbar /> 
        <div className="servicos">
          <Hero 
            imagem={BackgroundHero2} 
            titulo="Segurança e economia elétrica para seu condomínio" 
          />
        </div>
    </div>
  )
}

export default Home;