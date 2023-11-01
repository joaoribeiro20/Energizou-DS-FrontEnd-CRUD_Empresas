import React, { useState } from 'react';
import axios from 'axios';
import { MyData } from '../../../Interfaces/typesCompany.ts'; // Importe o tipo definido

import '../StylesSearch.css'



const ExibirPorCNPJ: React.FC = () => {
  const [data, setData] = useState<MyData | null>(null);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Atualiza o valor de inputValue com o valor do input quando ele é alterado.
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Valor do input: ' + inputValue);
    // O valor do input é acessado diretamente da variável inputValue.

    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.get<MyData>(`http://localhost:8088/Searchcpnj/${inputValue}`)
      .then(response => {
        console.log(response.data)
        setData(response.data); // Aqui você recebe os dados tipados

      })
      
      .catch(error => {
        // Lide com erros aqui
        console.log(error)
      });
      setInputValue('');
  }


  return (
    <>

      <div className='containerFilterCNPJ'>
        <h3>Filtrar por CNJP</h3>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>

      </div>



      {data && (
        <div className='containerEmpresas'>
          <div className='containerEmpresa'>
            <ul>
              {/* <li>nome: {data.title}</li>
                 <li>nome da empresa: {data.id}</li>
                 <li>telefone: {data.userId}</li>
                 <li>Email: {data.completed}</li> */}
              <h1>Empresas</h1>
              <li>nome: {data.nomeCliente}</li>
              <li>nome da empresa: {data.nomeEmpresa}</li>
              <li>telefone: {data.tefelone}</li>
              <li>Email: {data.email}</li>
              <li>CEP: {data.cep}</li>
              <li>Endereço: {data.endereco}  n{data.numero} </li>
              <li>CNPJ: {data.cnpj}</li>
            </ul>
          </div>
        </div>

      )}
    </>
  );
};


export default ExibirPorCNPJ