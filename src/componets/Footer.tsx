import './Pages/homePage/Home.css'

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
                            <li><a href="">Instagram</a></li>
                            <li><a href="">linkedin</a></li>
                            <li><a href="">tiktok</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>
                    </article>
                </section>
                <p>@Joao Ribeiro</p>
        </footer>
    )
}

export default Footer