import './StyleHome.css'
import Footer from '../../componets/Footer'
import Header from '../../componets/Header'
import { FC } from 'react'
import { Link } from 'react-router-dom'


const Home: FC = () => {
    return (
        <>
        <Header/>
        <main >
            <section className='divTitulo'>
                <h2><strong className='Titulo'>Energizou</strong> Desafio Tecnico</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, explicabo. Ipsam possimus ullam et culpa 
                    error dolorem consequatur harum cum, neque deserunt quos tempora nemo 
                    tempore at. Architecto, cupiditate dignissimos.</p><br />
                 
                <Link className='btnMain' to="/Cadastro">Cadastre sua empresa aqui!!</Link>
            </section>
            <section>
             <img src="./public/imginfo.png" alt="imagem logo energizou" className='imgHome' width={400} /> 
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Home