import axios from "axios";
import { useEffect, useState } from "react";
import { MyData } from "../../../Interfaces/typesCompany";

import "../StylesSearch.css"
import ExibirPorCNPJ from "../searchCNPJ/FilterCNPJ";
import Footer from "../../../componets/Footer";
import Header from "../../../componets/Header";
import { Link } from "react-router-dom";
import { cepMask, cnpjMask } from "../../../componets/masks";

const GetExibir: React.FC = () => {
  const [data, setData] = useState<[MyData] | null>(null);

  useEffect(() => {
    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.get<[MyData]>('http://localhost:8088/allSearch')
      .then(response => {
        console.log(response.data)
        setData(response.data); // Aqui você recebe os dados tipados

      })

      .catch(error => {
        // Lide com erros aqui
        console.log(error)
      });
  }, []);

  const itensRenderizados = data?.map((info, index) => (
    <div key={index}>
      <div className='containerEmpresa' >
        <div>
          <h3>{info.nomeEmpresa}</h3>
          <p>Dado da empresa Cadastrada</p>
          <span>
            <p>Prorietario: {info.nomeCliente}
            <br />
            CNPJ: {cnpjMask(info.cnpj)}
            <br />
            Telefone: {info.telefone}
            <br />
            Email: {info.email}
            <br />
            Cep:  {cepMask(info.cep)}
            <br />
            Endereço:  {info.endereco}  n{info.numero} 
            </p>
          </span>
        </div> <br />
        <Link className='LinkPageE' to="/Editar">Editar</Link>
        <Link className='LinkPageD' to="/Excluir">Excluir</Link>
      </div>
    </div>

  ));
  return (
    <>
    <Header />
      <ExibirPorCNPJ />
      <h2 className="containerMainBucar">Lista de empresas cadastradas</h2>
      <div className="containerEmpresas">
        {itensRenderizados}
      </div>
      

      <Footer />    
    </>
  );
};

export default GetExibir