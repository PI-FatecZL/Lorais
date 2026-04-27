import "../components/styles/containerceo.css";
function ContainerCeo({ leftText, image, rightText }) {
    return (
        <div className="container-section-blue">
            <div className="content-row">
                <div className="text-side">
                    <h2>{leftText}</h2>
                </div>
                
                <div className="image-center">
                    <img src={image} alt="Perfil" />
                </div>

                <div className="text-side">
                    <h2>{rightText}</h2>
                </div>
            </div>
        </div>
    );
}

export default ContainerCeo;