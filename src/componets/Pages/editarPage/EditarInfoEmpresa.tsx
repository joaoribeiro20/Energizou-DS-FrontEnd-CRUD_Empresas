import { FC } from "react";
import { Link } from "react-router-dom";

import "./EditarInfo.css"
import Forms from "../cadastroPage/Forms";

/* import defualtEE from "../defaultEditarExcluir/defualtEE"; */

const EditarInfoEmpresa: FC = () =>{
    return(
        <>
        <div className="divMainEditar">
            <div className="divLateral">
                <h3>Menu</h3>
                <Link className='divM' to="/">Home</Link>
            </div>

            <div className="divEditar">
                <div>
                      <h2>area de edição</h2>
                </div>
                <div>
                     
                </div>
              
            </div>
         
       </div>  
        </>
        
    )
}

export default EditarInfoEmpresa