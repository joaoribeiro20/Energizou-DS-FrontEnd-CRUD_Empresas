import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyData } from './typesCep.ts'; // Importe o tipo definido
/* import Exibir from '../componets/Pages/buscaPage/Exibir.tsx'; */

const MyComponent: React.FC = () => {
  const [data, setData] = useState<MyData | null>(null);

  useEffect(() => {
    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.get<MyData>('https://viacep.com.br/ws/05868590/json/')
      .then(response => {
        console.log(response.data)
        setData(response.data);
         // Aqui você recebe os dados tipados
      })
     
      .catch(error => {
        // Lide com erros aqui
        console.log(error)
      });
  }, []);

  return (
    <div>
      {/* Renderize os dados obtidos aqui */}
      {data && (
        <div>
          <h1>teste</h1>
          <p>nome: {data.cep}</p>
          <p>nome da empresa: {data.logradouro}</p>
        </div>
      )}
    </div>
  );
};



export default MyComponent;