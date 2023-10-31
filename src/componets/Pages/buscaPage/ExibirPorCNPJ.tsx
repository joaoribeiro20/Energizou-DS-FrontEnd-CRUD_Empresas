import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyData } from '../../types.ts'; // Importe o tipo definido





const ExibirPorCNPJ: React.FC = () => {
  const [data, setData] = useState<MyData| null>(null);
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
      axios.get<MyData>(`https://jsonplaceholder.typicode.com/todos/${inputValue}`)
        .then(response => {
          console.log(response.data)
          setData(response.data); // Aqui você recebe os dados tipados
  
        })
  
        .catch(error => {
          // Lide com erros aqui
          console.log(error)
        });
    }

  
  return (
    <>
      <h3>Filtrar por CNJP</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    
     
      {data && (
             <div className='containerEmpresas'>
             <div className='containerEmpresa'>
               <ul>
               <li>nome: {data.title}</li>
                 <li>nome da empresa: {data.id}</li>
                 <li>telefone: {data.userId}</li>
                 <li>Email: {data.completed}</li>
                 {/* <h1>Empresas</h1>
                 <li>nome: {data[0].nomeCliente}</li>
                 <li>nome da empresa: {data[0].nomeEmpresa}</li>
                 <li>telefone: {data[0].tefelone}</li>
                 <li>Email: {data[0].email}</li>
                 <li>CEP: {data[0].cep}</li>
                 <li>Endereço: {data[0].endereco}  n{data[0].numero} </li>
                 <li>CNPJ: {data[0].cnpj}</li> */}
               </ul>
             </div>
             </div>
            
          )}
    </>
  );
};


export default ExibirPorCNPJ