import './styles/ReviewCard.css';
import AvaliacaoFoto from '../assets/icons/icon-avaliacao.svg'; 
import AvaliacaoEstrelas from '../assets/icons/icon-estrelas.svg'; 

function ReviewCard () {
   
    return (
            <div className="card-avaliacao">
                <div className="foto-avaliacao">
                  <img src={AvaliacaoFoto} alt="foto do cliente avaliação" />
                </div>
                <div className="infos-avaliacao">
                  <h3 className="nome-cliente-avaliacao">Cliente</h3>
                  <img src={AvaliacaoEstrelas} alt="icone de estrelas" className="estrelas-avaliacao"/>
                  <p className="avaliacao">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
                </div>
            </div>
    )

}

export default ReviewCard;