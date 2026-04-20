import './styles/containerBenefits.css';

function ContainerBenefits({ 
  title, 
  b1Img, benefit1, description1, 
  b2Img, benefit2, description2, 
  b3Img, benefit3, description3 
}) {
  return (
    <section className="benefits-section">
      <div className="benefits-title">
        <h2>{title}</h2>
        <div className="yellow-line"></div>
      </div>

      <div className="benefits-grid">
        {/* Card 1 */}
        <div className="benefits-card" style={{ backgroundImage: `url(${b1Img})` }}>
          <div className="card-overlay">
            <h3>{benefit1}</h3>
            <p>{description1}</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="benefits-card" style={{ backgroundImage: `url(${b2Img})` }}>
          <div className="card-overlay">
            <h3>{benefit2}</h3>
            <p>{description2}</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="benefits-card" style={{ backgroundImage: `url(${b3Img})` }}>
          <div className="card-overlay">
            <h3>{benefit3}</h3>
            <p>{description3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContainerBenefits;