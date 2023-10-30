import { FC } from "react"


interface Props {
    mensagem: object | null;
}

const Exibir: FC<Props> = ({}) => {
    return (
        <>
            <div>
                <p>{}</p>
            </div>
        </>
    )
}

export default Exibir