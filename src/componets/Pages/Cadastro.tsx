
import Forms from "../Forms"
import { FC } from "react"

import './StyleCadastro.css'

const Cadastro: FC = () => {
    return (
        <>
            <div className="forms">
                <div className="imgForms">
                    <img className="imgForms" src="./public/backgraud.jpg" alt=""  />
                </div>

                < div className="divForms">
                    <Forms />
                </div>
            </div>
        </>
    )
}

export default Cadastro