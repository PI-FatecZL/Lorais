import { useParams } from "react-router-dom";
import servicos from "../data/servicos.json";

function ServicoDetails() {
  const { id } = useParams();

  const servico = servicos.find(
    (item) => item.id === Number(id)
  );

  if (!servico) {
    return <p>Serviço não encontrado</p>;
  }

  return (
    <div className="container-servico">
      <h1>{servico.nome}</h1>
      <p>{servico.id}</p>
      <p>{servico.descricao}</p>
      <p>{servico.preco}</p>
    </div>
  );
}

export default ServicoDetails;