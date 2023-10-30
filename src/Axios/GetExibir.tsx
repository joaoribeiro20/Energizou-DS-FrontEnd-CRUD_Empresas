import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyData } from '../types.ts'; // Importe o tipo definido
import Exibir from '../componets/Pages/Exibir.tsx';

const MyComponent: React.FC = () => {
  const [data, setData] = useState<MyData | null>(null);

  useEffect(() => {
    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.get<MyData>('https://localhost:8088/AllSearch')
      .then(response => {
        setData(response.data); // Aqui você recebe os dados tipados
      })
      .catch(error => {
        // Lide com erros aqui
      });
  }, []);

  return (
   <>
    <Exibir mensagem={data}/>
   </>
  );
};

export default MyComponent;