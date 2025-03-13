export default function Header() {
    return (
      <>

    <header className="header" id="header">
        <nav className = "nav container"> 
            <a herf = "#" className = "nav__logo">
                <div>
                    <img src = "img/logo-burger.svg" alt = "image"/>
                </div>

                McDonalds

            </a>

            <div className = "nav__menu" id = "nav-menu">
                <ul className="nav__list">
                    <li>
                        <a href="#home" className="nav__link">Home</a>
                    </li>

                    <li>
                        <a href="#recipe" className="nav__link">Recipe</a>
                    </li>

                    <li>
                        <a href="#popular" className="nav__link">Popular</a>
                    </li>

                    <li>
                        <a href="#delivery" className="nav__link">Delivery</a>
                    </li>

                    <li>
                        <a href="#contact" className="nav__link">Contact</a>
                    </li>
                </ul>
                
                <div className="nav__close" id="nav-close">
                 <i className="ri-close-large-line"></i>
                </div>
            </div>
           
            <div className="nav__toggle" id="nav-toggle">
                <i className="ri-apps-2-fill"></i>
            </div>
         </nav> 
      </header>

    </>
  )
}