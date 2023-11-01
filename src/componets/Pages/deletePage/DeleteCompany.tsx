import { FC } from "react";
import { Link } from "react-router-dom";

import './StyleDeletePage.css'
import { useState } from 'react';

import ComponetsDinamico from "./ComponetsDynamic";

const DeleteCompany: FC = () =>{
    const [elementoVisivel, setElementoVisivel] = useState(false);
    
  const adicionarElemento = () => {
    if(elementoVisivel === true){
        setElementoVisivel(false)
    }else{
         setElementoVisivel(true);
    }
   
  };


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
                      <input type="text" />
                      <button onClick={adicionarElemento}>Exluir</button>
             
                        {elementoVisivel && <ComponetsDinamico />}
                </div>
                <div>
                     
                </div>
              
            </div>
         
       </div>  
        </>
        
    )
}

export default DeleteCompany