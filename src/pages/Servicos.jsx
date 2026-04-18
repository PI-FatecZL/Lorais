import './styles/Servicos.css';
import Hero from '../components/Hero'
import BackgroundHero2 from '../assets/images/servicos/hero.png';

function Servicos() {
  return (

    <div className="servicos">
      <Hero imagem={BackgroundHero2} titulo="Nosso Serviços" />
    </div>

  )
} 

export default Servicos