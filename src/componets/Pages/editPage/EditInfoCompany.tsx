import { FC } from "react";
import { Link } from "react-router-dom";

import './StyleEditInfoCompany.css'
import FormsEditCompany from "./FormsEditCompany";
/* import defualtEE from "../defaultEditarExcluir/defualtEE"; */

const EditarInfoEmpresa: FC = () =>{
    return(
        <>
        <div className="divMainEditar">
            <div className="divLateral">
                <h3>Menu</h3>
                <Link className='btnHomeEdit' to="/">Home</Link>
            </div>

            <div className="divEditar">
                <div>
                      <h2>area de edição</h2>
                      <FormsEditCompany />
                </div>
                <div>
                     
                </div>
              
            </div>
         
       </div>  
        </>
        
    )
}

export default EditarInfoEmpresa