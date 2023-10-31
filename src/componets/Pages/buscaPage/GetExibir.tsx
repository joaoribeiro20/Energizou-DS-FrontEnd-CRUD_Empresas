import axios from "axios";
import { useEffect, useState } from "react";
import { MyData } from "../../types";

import "./StylesBusca.css"
import ExibirPorCNPJ from "./ExibirPorCNPJ";

const GetExibir:React.FC = () => {
    const [data, setData] = useState<[MyData] | null>(null);
  
    useEffect(() => {
      // Faça uma solicitação Axios no useEffect para buscar os dados
      axios.get<[MyData]>('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          console.log(response.data)
          setData(response.data); // Aqui você recebe os dados tipados
          
        })
  
        .catch(error => {
          // Lide com erros aqui
          console.log(error)
        });
    }, []);


    const itensRenderizados = data?.map((data1, index) => (
        <div className='containerEmpresas' key={index}>
            <div className='containerEmpresa' >
          <p>nome da empresa: {data1.title}</p>
          <p>nome: {data1.userId}</p>
          <p>telefone: {data1.id}</p>
          <p>Email: {data1.completed}</p>
        </div>
            </div>
        
      ));



    return (
      <>
      <ExibirPorCNPJ />
        <h2 className="containerMainBucar">lista de empresas cadastradas</h2>
      {itensRenderizados}

      
       
       {/*  { data?.map((((data1, index) => {
            {console.log(data1)}
            <div className='containerEmpresas'>
               <div key={index} className='containerEmpresa'>
                     <p>nome da empresa: {data1.title}</p> */}
             
               {/*   <ul>
                 <h1>teste</h1>
                 <li>nome: {data1.userId}</li>
                   <li>nome da empresa: {data1.title}</li>
                   <li>telefone: {data1.id}</li>
                   <li>Email: {data1.completed}</li> */}
                   {/* <h1>Empresas</h1>
                   <li>nome: {data1.nomeCliente}</li>
                   <li>nome da empresa: {data1.nomeEmpresa}</li>
                   <li>telefone: {data1.tefelone}</li>
                   <li>Email: {data1.email}</li>
                   <li>CEP: {data1.cep}</li>
                   <li>Endereço: {data1.endereco}  n{data1.numero} </li>
                   <li>CNPJ: {data1.cnpj}</li> */}
                 {/* </ul> */}
             {/*   </div>
               </div> */}
              
       {/*  })))}  */}
      </>
    );
  };

  export default GetExibir