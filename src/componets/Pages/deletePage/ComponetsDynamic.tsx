import { FC, useState } from "react";
import './styleComponetsDynamic.css'
import axios from "axios";

interface MyComponentProps {
  message: string;
}

const ComponetsDinamico: FC<MyComponentProps> = (props)  => {
  const [elementoVisivel, setElementoVisivel] = useState(true); // Começa visível
 
  


  const handleSubmit = () => {
    
    alert('Valor do input: ' + props.message);
    // O valor do input é acessado diretamente da variável inputValue.

    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.delete(`http://localhost:8088/Searchcpnj/${props.message}`)
      .then(response => {
        console.log(response.data)
         // Aqui você recebe os dados tipados

      })
      
      .catch(error => {
        // Lide com erros aqui
        console.log(error)
      });
      
  }

  const adicionarElemento = () => {
    setElementoVisivel(false); // Define como falso ao clicar em "Voltar"
  }

  return (

    <>
      {elementoVisivel ? (
    <div className="novo-elemento">
     <h3>Deseja Realmente Excluir permanetemente os dados da empresa com CNJH {} ?</h3>
     <button onClick={adicionarElemento}>Voltar</button>
    {/*  {elementoVisivel && <DeleteCompany message={'true'} />} */}
     <button onClick={handleSubmit} >Sim, Quero excluir</button>
    </div>
    ) : null}
    </>

    
  );
};

export default ComponetsDinamico