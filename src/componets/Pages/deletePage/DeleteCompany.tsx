import { FC } from "react";
import { Link } from "react-router-dom";

import './StyleDeletePage.css'
import { useState } from 'react';

import ComponetsDinamico from "./ComponetsDynamic";

interface MyComponentProps {
    message: string;
  }

const DeleteCompany: FC<MyComponentProps> = (props) =>{
    const [elementoVisivel, setElementoVisivel] = useState(false);
    const [inputValue, setInputValue] = useState('');

  const adicionarElemento = () => {
    
    if(elementoVisivel === true){
        setElementoVisivel(false)
    }else{
         setElementoVisivel(true);
    }
   
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Atualiza o valor de inputValue com o valor do input quando ele é alterado.
    setInputValue(event.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Valor do input: ' + inputValue);
    // O valor do input é acessado diretamente da variável inputValue.

  }

    return(
        <>
        <div className="divMainEditar">
            <div className="divLateral">
                <h3>Menu</h3>
                <Link className='btnMenuExcluir' to="/">Home</Link>
            </div>

            <div className="divEditar">
                <div>
                      <h2>Areaa de exclusão de empresa</h2>
                      <h3>informe o CNPJ da empresa</h3>
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
                      <input type="text" />
                      <button onClick={adicionarElemento}>Exluir</button>
             
                        {elementoVisivel && <ComponetsDinamico message= {inputValue}/>}
                </div>
                <div>
                     
                </div>
              
            </div>
         
       </div>  
        </>
        
    )
}

export default DeleteCompany