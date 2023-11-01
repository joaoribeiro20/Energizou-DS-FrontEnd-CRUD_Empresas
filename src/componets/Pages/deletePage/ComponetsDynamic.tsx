import { FC, useState } from "react";
import './styleComponetsDynamic.css'
import DeleteCompany from "./DeleteCompany";


const ComponetsDinamico: FC = () => {
  const [elementoVisivel, setElementoVisivel] = useState(true); // Começa visível

  const adicionarElemento = () => {
    setElementoVisivel(false); // Define como falso ao clicar em "Voltar"
  }

  return (

    <>
      {elementoVisivel ? (
    <div className="novo-elemento">
     <h3>Deseja Realmente Excluir permanetemente os dados da empresa com CNJH {} ?</h3>
     <button onClick={adicionarElemento}>Voltar</button>
     {elementoVisivel && <DeleteCompany />}
     <button>Sim, Quero excluir</button>
    </div>
    ) : null}
    </>

    
  );
};

export default ComponetsDinamico