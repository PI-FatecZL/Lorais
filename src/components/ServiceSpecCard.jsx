import './styles/ServiceSpecCard.css';

function ServiceSpecCard ({img, title, value, obs, altText = "ícone de especificação"}) {
   
    return (
            <div className="spec-card">
              <div className="spec-header">
                <img src={img} alt={altText} />
                <div className="spec-title-wrapper">
                  <h1 className="spec-title">{title}</h1>
                  <p className="spec-value">{value}</p>
                </div>
              </div>
              <div className="spec-observation">
                <p className="spec-observation-text">{obs}</p>
              </div>
            </div>
    )

}

export default ServiceSpecCard;