import hero from "./images/photo-grid.png"

function Hero(){
    return (
        <section>
            <div className="hero-img-container">
                <img className="hero-img"  src={hero} alt="hero"></img>
            </div>
            <div className= "hero-content-container" >
                <h1 className="hero-title">Online Experiences</h1>
                <p className="hero-para"> Join unique interactive activites led by one-of-a-kind
                    hosts-all without leaving home.
                </p>
            </div>
        </section>
    )
}

export default Hero 