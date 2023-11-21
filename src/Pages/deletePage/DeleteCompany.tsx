import { FC, useState } from "react";
import './StyleDeletePage.css'
import { MyData } from "../../Interfaces/typesCompany";
import axios from "axios";
import { Link } from "react-router-dom";
import { cepMask, cnpjMask } from "../../componets/masks";
/* import excluir from "../../services/Delete"; */

const DeleteCompany: FC = () => {
  const [data, setData] = useState<MyData | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [mensagemValue, setMensagemValue] = useState(false);
  const [mensagemBuscaValue, setMensagemBuscaValue] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(null)
    setInputValue(cnpjMask(event.target.value));
  };

  const cancelar = () => {
    setData(null)
    setInputValue('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMensagemValue(false)
    axios.get<MyData>(`http://localhost:8088/Searchcpnj/${inputValue.replace(/\D/g, '')}`)
      .then(response => {
        console.log(response.data)
        response.data ? setMensagemBuscaValue(false) : setMensagemBuscaValue(true)

        response.data ? setData(response.data) : setData(null)


        /* setInfo(true) */
      })
      .catch(error => {
        // Lide com erros aqui
        console.log(error)
      });

  }

/*   function deletar(){
    excluir(data?.cnpj.replace(/\D/g, '') || "")
    setData(null)
    setInputValue('')
    setMensagemValue(true)
    alert(`Empresa excluida com sucesso!!`)
  } */
  
  const excluir = () => {
    axios.delete(`http://localhost:8088/DeleteCompany/${data?.cnpj.replace(/\D/g, '')}`)
      .then(response => {
        response.status
        setData(null)
        setInputValue('')
        setMensagemValue(true)
        alert(`Empresa excluida com sucesso!!`)
      })
      .catch(error => {
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
              <div>
                <h2>Empresas {data.nomeEmpresa}</h2>
                <p>nome: {data.nomeCliente}</p>
                <p>telefone: {data.telefone}</p>
                <p>Email: {data.email}</p>
                <p>CEP: {cepMask(data.cep)}</p>
                <p>Endereço: {data.endereco}  n{data.numero} </p>
                <p>CNPJ: {cnpjMask(data.cnpj)}</p>
                <div className="novo-elemento">
                  <h3>Deseja Realmente Excluir permanetemente os dados da empresa com CNJH {cnpjMask(data.cnpj)} ?</h3>
                  <button onClick={excluir} >Sim, Quero excluir</button>
                  <button onClick={cancelar}>Cancelar</button>
                </div>
              </div>
            ) : <div> </div>}

            {mensagemValue ? (
              <div>Empresa excluida com sucesso!!</div>
            ) :
              <div></div>
            }
            {mensagemBuscaValue ? (
              <div>empresa nao encontrada</div>
            ) :
              <div> </div>
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteCompany