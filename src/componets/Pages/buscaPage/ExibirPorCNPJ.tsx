import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyData } from '../../types.ts'; // Importe o tipo definido





const ExibirPorCNPJ: React.FC = () => {
  const [data, setData] = useState<[MyData] | null>(null);

  useEffect(() => {
    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.get<[MyData]>('http://localhost:8088/allSearch/')
      .then(response => {
        console.log(response.data)
        setData(response.data); // Aqui você recebe os dados tipados

      })

      .catch(error => {
        // Lide com erros aqui
        console.log(error)
      });
  }, []);

  return (
    <>
      <h3>Filtrar por CNJP</h3>
      <div>
        <input type="text" name="" id="" />
        <button>Buscar</button>
      </div>
    
     
      {data && (
             <div className='containerEmpresas'>
             <div className='containerEmpresa'>
               <ul>
                 <h1>Empresas</h1>
                 <li>nome: {data[0].nomeCliente}</li>
                 <li>nome da empresa: {data[0].nomeEmpresa}</li>
                 <li>telefone: {data[0].tefelone}</li>
                 <li>Email: {data[0].email}</li>
                 <li>CEP: {data[0].cep}</li>
                 <li>Endereço: {data[0].endereco}  n{data[0].numero} </li>
                 <li>CNPJ: {data[0].cnpj}</li>
               </ul>
             </div>
             </div>
            
          )}
    </>
  );
};

export default ExibirPorCNPJ