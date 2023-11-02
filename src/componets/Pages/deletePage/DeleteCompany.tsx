import { FC, useState } from "react";


import './StyleDeletePage.css'
import ComponetsDinamico from "./ComponetsDynamic";

import { MyData } from "../../Interfaces/typesCompany";
import axios from "axios";
import { Link } from "react-router-dom";
import { cnpjMask } from "../../masks";

const DeleteCompany: FC = () => {
  const [data, setData] = useState<MyData | null>(null);
  const [inputValue, setInputValue] = useState('');
 /*  const [valueProps, setValueProps] = useState('');
 */

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Atualiza o valor de inputValue com o valor do input quando ele é alterado.
    setInputValue(cnpjMask(event.target.value));
  };


 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

   
    // O valor do input é acessado diretamente da variável inputValue.
 
 
    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.get<MyData>(`http://localhost:8088/Searchcpnj/${inputValue.replace(/\D/g, '')}`)
      .then(response => {
        console.log(response.data )
        response.data ? 
        setData(response.data) : setData(null)
      })
      .catch(error => {
        // Lide com erros aqui
        console.log(error)
      });
      
  }

  return (
    <>
      <div className="divMainEditar">

        <div className="divLateral">
          <h3>Menu</h3>
          <Link className='btnMenuExcluir' to="/">Home</Link>
        </div>
        <div className="divEditar">
          <div>
            <h2>Areaa de exclusão de empresa</h2>
            <h3>informe o CNPJ da empresa</h3>
            <div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  maxLength={18}
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
              </form>
            </div>
            {data ? (
                <ComponetsDinamico
                 nomeCliente={data.nomeCliente} 
                 nomeEmpresa={data.nomeEmpresa} 
                 numero={data.nomeEmpresa}
                 cep={data.cep}
                 cnpj={data.cnpj}
                 endereco={data.endereco}
                 email={data.email} 
                 senha={data.senha}
                 telefone={data.telefone}
                 />
            ) : <div><h3>Nenhuma empresa encontrada</h3> </div>}

          </div>
        </div>
      </div>
    </>

  )
}

export default DeleteCompany