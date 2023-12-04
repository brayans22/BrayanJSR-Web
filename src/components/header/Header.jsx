import { Link } from 'react-router-dom'
import './header.css'

export function Header()
{
    return(
        <header>
            <div class="logo-brayanjsr">
                <img src="../../../Media/logo-brayanjsr.jpg" alt="logo del artista BrayanJSR"/> 
                <section class ="logo-brayanjsr-name">
                    <h2> BrayanJSR </h2>
                    <div class="logo-brayanjsr-hidden-message"><h5>Feelings Through Music</h5></div>
                </section>
            </div>   
            <nav id ="main-nav">
                <Link to='/'> Home </Link>
                <Link to='/music'> Music </Link>
                <Link to='/store'> Store </Link>
                <Link to='/gallery'> Gallery </Link>
                <Link to='/contact'> Contact </Link>
            </nav>
            <div class = "logo-brayanjsr-sign-up">
                <a href="https://open.spotify.com" target="_blank" > SIGN UP </a>   
            </div> 
        </header>
    )
}

export default Header
