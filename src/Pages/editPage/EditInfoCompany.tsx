import { FC, useState } from "react";
import { Link } from "react-router-dom";

import './StyleEditInfoCompany.css'
import FormsEditCompany from "./FormsEditCompany";
import { MyData } from "../../Interfaces/typesCompany";
import { cnpjMask } from "../../componets/masks"
import axios from "axios";

/* import defualtEE from "../defaultEditarExcluir/defualtEE"; */

const EditarInfoEmpresa: FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState<MyData | null>(null);

    const buscar = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(null)
        setInputValue(cnpjMask(event.target.value))
    };


    
    const SubmitCnpj = (e: React.FormEvent) => {
        e.preventDefault();

        // O valor do input é acessado diretamente da variável inputValue.

        // Faça uma solicitação Axios no useEffect para buscar os dados
        axios.get<MyData>(`http://localhost:8088/Searchcpnj/${inputValue.replace(/\D/g, '')}`)
            .then(response => {
                console.log(response.data)

                response.data ?
                    setData(response.data)
                    :
                    alert('empresa nao encontrada'), setData(response.data)

            })

            .catch(error => {
                // Lide com erros aqui
                console.log(error)
            });
        setInputValue('');
    }


    return (
        <>

            <div className="divMainEditar">
                <div className="divLateral">
                    <h3>Menu</h3>
                    <Link className='btnHomeEdit' to="/">Home</Link>
                </div>

                <div className="divEditar">
                    <div>
                        <h2>area de edição</h2>
                        <h3>Filtrar por CNJP</h3>

                        <form onSubmit={SubmitCnpj}>
                            <input
                                type="text"
                                maxLength={18}
                                value={inputValue}
                                onChange={buscar}
                            />
                            <button type="submit">Buscar</button>
                        </form>
                        {data ? (
                            <FormsEditCompany
                                nomeCliente={data.nomeCliente}
                                nomeEmpresa={data.nomeEmpresa}
                                numero={data.nomeEmpresa}
                                cep={data.cep}
                                cnpj={data.cnpj}
                                endereco={data.endereco}
                                email={data.email}
                                senha={data.senha}
                                telefone={data.telefone}
                            />
                        ) : <div><h3>Nenhuma empresa encontrada</h3> </div>}

                    </div>
                    <div>

                    </div>

                </div>

            </div>
        </>

    )
}

export default EditarInfoEmpresa