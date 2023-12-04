import './home.css'

export function Home()
{
    return (
        <>
            <section id="separator-header">
                <div class="divider-header"></div>
            </section>

            <div class="background-container">
                <div class="overlay">
                    <h1>Album What Was Real? release on <bold>22/12/2023</bold></h1>
                    <h2>PRE SAVE NOW</h2>
                    <a href="https://open.spotify.com/artist/1DNdeBjys6meGT7oO65CnQ" target="_blank"/>
                    <img src="https://cdn-icons-png.flaticon.com/128/3671/3671955.png" 
                        alt="Spotify BrayanJSR"/>
                    <button> Spotify </button>
                    <button> Youtube  </button>
                    <button> Apple Music </button>
                    <button> Amazon Music </button>
                    <button> Dezeer </button>
                </div>
            </div>

            <section id="separator-footer">
                <div class="divider-footer"></div>
            </section>
        </>
    )
}

export default Home