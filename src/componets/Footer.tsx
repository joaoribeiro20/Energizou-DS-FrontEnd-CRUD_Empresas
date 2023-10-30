import './Pages/Home.css'

function Footer(){
    return(
        <footer>
                <section className='sectionFooter'>
                    <article>
                        <img src="./public/imgSegundaria.jpg" alt="" className='imgFooter'/>
                    </article>
                    <article> 
                        <ul>
                             <p>Contato</p>
                            <li><a href="">Link</a></li>
                            <li><a href="">Link</a></li>
                            <li><a href="">Link</a></li>
                            <li><a href="">Link</a></li>
                        </ul>
                    </article>
                </section>
                <h3>@Joao Ribeiro</h3>
        </footer>
    )
}

export default Footer