import React, { useState } from 'react';
import axios from 'axios';
import { MyData } from '../../../Interfaces/typesCompany.ts'; // Importe o tipo definido

import '../StylesSearch.css'

import {cnpjMask} from '../../../masks.ts'

const ExibirPorCNPJ: React.FC = () => {
  const [data, setData] = useState<MyData | null>(null);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(cnpjMask(event.target.value))
  };

 
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // O valor do input é acessado diretamente da variável inputValue.

    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.get<MyData>(`http://localhost:8088/Searchcpnj/${ inputValue.replace(/\D/g, '')}`)
      .then(response => {
        console.log(response.data)
        response.data ? 
        setData(response.data) : 
        alert('empresa nao encontrada'), setData(response.data)

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
              maxLength={18}
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit">Buscar</button>
          </form>
        </div>

      </div>



      {data ? (
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
              <li>telefone: {data.telefone}</li>
              <li>Email: {data.email}</li>
              <li>CEP: {data.cep}</li>
              <li>Endereço: {data.endereco}  n{data.numero} </li>
              <li>CNPJ: {data.cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')}</li>
            </ul>
          </div>
        </div>
      ) : 
      <div className='containerFilterCNPJ'>
        <h3>Nenhuma empresa encontrada</h3>
        </div> }
    </>
  );
};


export default ExibirPorCNPJ