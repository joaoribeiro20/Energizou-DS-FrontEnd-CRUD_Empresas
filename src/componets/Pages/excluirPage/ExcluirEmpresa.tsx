import { FC } from "react";
import { Link } from "react-router-dom";

import "../editarPage/EditarInfo.css"


/* import defualtEE from "../defaultEditarExcluir/defualtEE"; */

const ExcluirEmpresa: FC = () =>{
    return(
        <>
        <div className="divMainEditar">
            <div className="divLateral">
                <h3>Menu</h3>
                <Link className='divM' to="/">Home</Link>
            </div>

            <div className="divEditar">
                <div>
                      <h2>Areaa de exclusão de empresa</h2>
                      <h3>informe o CNPJ da empresa</h3>
                      <input type="text" />
                      <button>Exluir</button>
                </div>
                <div>
                     
                </div>
              
            </div>
         
       </div>  
        </>
        
    )
}

export default ExcluirEmpresa