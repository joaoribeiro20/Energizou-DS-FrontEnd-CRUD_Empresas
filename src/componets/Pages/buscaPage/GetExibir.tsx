import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MyData } from '../../types.ts'; // Importe o tipo definido

import Header from '../../Header.tsx';
import Footer from '../../Footer.tsx';
import "./StylesBusca.css"
import ExibirPorCNPJ from './ExibirPorCNPJ.tsx';



const MyComponent: React.FC = () => {
  const [data, setData] = useState([]);
  
 

  useEffect(() => {
    // Faça uma solicitação Axios no useEffect para buscar os dados
    axios.get(' https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        console.log(response.data.results)
        setData(response.data.results); // Aqui você recebe os dados tipados

        for (const objeto of response.data.results
          ) {
          const informacao = objeto.name;
         
          console.log(`Informação: ${informacao}`);
          <div>
            {informacao}
          </div>
        }
     
      })
      .catch(error => {
        // Lide com erros aqui
        console.log(error)
      });
  }, []);

  return (
    <>
      <Header />
      <div className='containerMainBucar'>
        <h2>Lista de todas empresas Cadastradas</h2>
          {}
         {/* <ExibirPorCNPJ /> */}
        <Footer />
      </div>
    </>

  );
};
export default MyComponent;