import { FC, useState } from "react";
import './styleComponetsDynamic.css'
import axios from "axios";
import { MyData } from "../../Interfaces/typesCompany";


const ComponetsDinamico: FC<MyData> = (props) => {
  const [elementoVisivel, setElementoVisivel] = useState(true); // Começa visível
  /* const [Visivel, setVisivel] = useState(); // Começa visível
  */

  const handleSubmit = () => {
    axios.delete(`http://localhost:8088/DeleteCompany/${props.cnpj.replace(/\D/g, '')}`)
      .then(response => {
        response.status
        setElementoVisivel(false)
    /*     props.cep=''
        props.cnpj=''
        props.email=''
        props.endereco=''
        props.nomeCliente=''
        props.nomeEmpresa=''
        props.numero=''
        props.telefone='' */
      })
      .catch(error => {
        console.log(error)
      });
      setElementoVisivel(false)
  }

  return (

    <>


      {elementoVisivel ? (

        <div>
          <h2>Empresas {props.nomeEmpresa}</h2>
          <p>nome: {props.nomeCliente}</p>
          <p>telefone: {props.telefone}</p>
          <p>Email: {props.email}</p>
          <p>CEP: {props.cep}</p>
          <p>Endereço: {props.endereco}  n{props.numero} </p>
          <p>CNPJ: {props.cnpj}</p>
          <div className="novo-elemento">
            <h3>Deseja Realmente Excluir permanetemente os dados da empresa com CNJH { } ?</h3>
            <button onClick={handleSubmit} >Sim, Quero excluir</button>
            <button onClick={} >Cancelar</button>
          </div>
        </div>
      ) :
        <h2>empresa excluida com sucesso</h2>
      }



    </>


  );
};

export default ComponetsDinamico