import "./styles/Services.css";
import Hero from "../components/Hero";
import CardService from "../components/CardService";
import servicos from "../data/servicos.json";
import BackgroundHero2 from "../assets/images/services/hero.png";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Services() {
  return (
    <div className="services">
       <Navbar />
      <Hero imagem={BackgroundHero2} titulo="Nosso Serviços" />

      <div className="container-services">
        <div className="container-cards">
          {servicos.map((servico) => (
            <CardService data={servico} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
