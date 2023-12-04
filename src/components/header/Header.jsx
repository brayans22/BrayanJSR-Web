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

            <Router>
                <nav id ="main-nav">
                    <Link to="/"> Home     </Link>
                    <Link to="/"> Music    </Link>
                    <Link to="/"> Store    </Link>
                    <Link to="/"> Gallery  </Link>
                    <Link to="/"> Contact  </Link>
                </nav>
                <Route path="../home/" exact component={Home}/>
                <Route path="../music/" exact component={Music}/>
                <Route path="../store/" exact component={Store}/>
                <Route path="../gallery/" exact component={Gallery}/>
                <Route path="../contact" exact component={Contact}/>
            </Router> 

            <div class = "logo-brayanjsr-sign-up">
                <a href="https://open.spotify.com" target="_blank" > SIGN UP </a>   
            </div> 
        </header>
    )
}

export default Header