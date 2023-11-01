import { Link } from 'react-router-dom'
import '../Pages/homePage/StyleHome.css'
import { FC } from 'react'

const Header: FC = () => {
    return (
        <>
            <header>
                <div>
                    <img className='imgLogoHeader' src="./public/logo.jpg" alt="logo" />
                </div>
                <nav className='navBarMain'>
                    <Link className='divM' to="/">Home</Link>
                    <Link className='divM' to="/Cadastro">Cadastro</Link>
                    <Link className='divM' to="/Buscar">Buscar</Link>
                    <Link className='divM' to="/Editar">Editar</Link>
                    <Link className='divM' to="/Excluir">Excluir</Link>
                </nav>
                

            </header>
            <hr color='#f8cc03' />
        </>


    )
}

export default Header