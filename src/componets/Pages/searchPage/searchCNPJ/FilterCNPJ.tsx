import React, { useState } from 'react';
import axios from 'axios';
import { MyData } from '../../../Interfaces/typesCompany.ts'; // Importe o tipo definido

import '../StylesSearch.css'

import {cepMask, cnpjMask} from '../../../masks.ts'
import { Link } from 'react-router-dom';

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
      
      <div className='teste'>
          <div className='containerEmpresa'>
          <div>
          <h3>{data.nomeEmpresa}</h3>
          <p>Dado da empresa Cadastrada</p>
          <span>
            <p>Prorietario: {data.nomeCliente}
            <br />
            CNPJ: {cnpjMask(data.cnpj)}
            <br />
            Telefone: {data.telefone}
            <br />
            Email: {data.email}
            <br />
            Cep:  {cepMask(data.cep)}
            <br />
            Endereço:  {data.endereco}  n{data.numero} 
            </p>
          </span>
        </div> <br />
        <Link className='LinkPageE' to="/Editar">Editar</Link>
        <Link className='LinkPageD' to="/Excluir">Excluir</Link>
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