import './Home'
import Header from '../../Header';
import Footer from '../../Footer';

function Home(){
    return (
        <>
        <Header/>
        <main >
            <section className='divTitulo'>
                <h2><strong className='Titulo'>Energizou</strong> Desafio Tecnico</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, explicabo. Ipsam possimus ullam et culpa 
                    error dolorem consequatur harum cum, neque deserunt quos tempora nemo 
                    tempore at. Architecto, cupiditate dignissimos.</p>
                <button className='btnMain'><a href="/Cadastro">Cadastre sua empresa aqui!!</a></button>
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