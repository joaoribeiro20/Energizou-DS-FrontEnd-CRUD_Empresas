import axios from "axios";
import { useEffect, useState } from "react";
import { MyData } from "../../../Interfaces/typesCompany";

import "../StylesSearch.css"
import ExibirPorCNPJ from "../searchCNPJ/FilterCNPJ";
import Footer from "../../../GenericComponents/Footer";
import Header from "../../../GenericComponents/Header";

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

  /* 
      const itensRenderizados = data?.map((data1, index) => (
          <div className='containerEmpresas' key={index}>
              <div className='containerEmpresa' >
            <p>nome da empresa: {data1.title}</p>
            <p>nome: {data1.userId}</p>
            <p>telefone: {data1.id}</p>
            <p>Email: {data1.completed}</p>
          </div>
              </div>
          
        )); */


  const itensRenderizados = data?.map((data1, index) => (
    <div className='containerEmpresas' key={index}>
      <div className='containerEmpresa' >
        <ul>
          <li>nome: {data1.nomeCliente}</li>
          <li>nome da empresa: {data1.nomeEmpresa}</li>
          <li>telefone: {data1.tefelone}</li>
          <li>Email: {data1.email}</li>
          <li>CEP: {data1.cep}</li>
          <li>Endereço: {data1.endereco}  n{data1.numero} </li>
          <li>CNPJ: {data1.cnpj}</li>
        </ul>
      </div>
    </div>

  ));
  return (
    <>
    <Header />
      <ExibirPorCNPJ />
      <h2 className="containerMainBucar">lista de empresas cadastradas</h2>
      {itensRenderizados}

      <Footer />    
    </>
  );
};

export default GetExibir