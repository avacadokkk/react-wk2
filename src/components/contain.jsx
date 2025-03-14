export default function Contain() {
    return (
        <> 
 <main className="main">
         
         <section className="home section" id="home">
            <div className = "home container container grid">
                <div className = "home__data">
                    <h1 className = "home__title">I'm Lovin' It!</h1>
                    <p className = "home__description">
                        We serve the best burgers on the planet, 
                        you deserve a break today, come enjoy 
                        McDonalds.
                    </p>
                    <a href="#popular" className="button">Bite Now</a>

                    <img src="img/sticker-potatoes.svg" alt="image" className="home__sticker"/>
                </div>
                <div className="home__images">
                    <img src="img/home-burger.png" alt="image" className="home__burger"/>
                    <img src="img/home-dish.png" alt="image" className="home__dish"/>
                    <img src="img/home-potato.png" alt="image" className="home__ingredient home__potato-1"/>
                    <img src="img/home-potato.png" alt="image" className="home__ingredient home__potato-2"/>
                    <img src="img/home-tomato.png" alt="image" className="home__ingredient home__tomato-1"/>
                    <img src="img/home-tomato.png" alt="image" className="home__ingredient home__tomato-2"/>
                    <img src="img/home-lettuce.png" alt="image" className="home__ingredient home__lettuce-1"/>
                    <img src="img/home-lettuce.png" alt="image" className="home__ingredient home__lettuce-2"/>

                </div>
            </div>
         </section>
        </main>

</>
    )

}