import './styles/containerAvaliations.css';
function ContainerAvaliations({ 
  title, 
  client1, stars1, text1, 
  client2, stars2, text2, 
  client3, stars3, text3 
}) {
  return (
    <section className="avaliation-section">
      <div className="avaliations-container">
        <h2 className="avaliations-title">{title}</h2>
        <div className="yellow-line"></div>

        <div className="avaliations-grid">
          <div className="avaliation-card">
            <div className="card-header">
              <img src={client1} alt="Cliente" className="author-photo" />
              <div className="author-info">
                <span className="author-name">Cliente</span>
                <div className="stars">{stars1}</div>
              </div>
            </div>
            <p className="avaliation-text">{text1}</p>
          </div>

          <div className="avaliation-card">
            <div className="card-header">
              <img src={client2} alt="Cliente" className="author-photo" />
              <div className="author-info">
                <span className="author-name">Cliente</span>
                <div className="stars">{stars2}</div>
              </div>
            </div>
            <p className="avaliation-text">{text2}</p>
          </div>
          <div className="avaliation-card">
            <div className="card-header">
              <img src={client3} alt="Cliente" className="author-photo" />
              <div className="author-info">
                <span className="author-name">Cliente</span>
                <div className="stars">{stars3}</div>
              </div>
            </div>
            <p className="avaliation-text">{text3}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContainerAvaliations;