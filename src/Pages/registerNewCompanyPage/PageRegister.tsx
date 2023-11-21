
import Forms from "./FormsNewCompany"
import { FC } from "react"

import './StyleRegister.css'

const Cadastro: FC = () => {
    return (
        <>
            <div className="forms">
                <div className="ConMain">
                  <div className="imgForms">
                    <img className="imgForms" src="./public/backgraud.jpg" alt=""  />
                </div>
                < div className="divForms">
                    <Forms />
                </div>
                </div>
               
            </div>
        </>
    )
}

export default Cadastro