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
                
            <nav id = "main-nav">
                <a href="#active"> Home </a>
                <a href="../Music/music.html"> Music </a>
                <a href="../Store/store.html"> Store </a>
                <a href="../Gallery/gallery.html"> Gallery </a>
                <a href="../About Me/about-me.html"> About Me </a>
                <a href="../Contact/contact.html"> Contact </a>
            </nav>

            <div class = "logo-brayanjsr-sign-up">
                <a href="https://open.spotify.com" target="_blank" > SIGN UP </a>   
            </div> 
        </header>
    )
}

export default Header