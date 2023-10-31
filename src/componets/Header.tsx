import './Pages/homePage/Home.css'

function Header(){
    return(
        <>
         <header>
        <div>
            <img className='imgLogoHeader' src="./public/logo.jpg" alt="logo" />
        </div>
        <div className="teste"> 
        <div className="divM">
            <a href="/Cadastro">Cadastre</a>  
            </div>
            <div className="divM">
            <a href="/Pesquisar">Pesquisar</a>  
            </div>
            <div className="divM">
                <a href="/Editar">Editar </a>
            </div>
            <div className="divM">
                <a href="/Excluir">Excluir</a> 
            </div>

            <div className="divM">
            <a href="/">Home</a>  
            </div>

            <div className="divM">
            <a href="/">login</a>  
            </div>
            
            
        </div>
      
    </header>
    <hr color='#f8cc03' />
        </>
       
  
    )
}

export default Header