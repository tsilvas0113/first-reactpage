import React from "react"
import logo from '../reactjs-icon.png'

function Navbar (props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img src={logo} className='nav--logo_icon' alt='logo-image' />
            <div className="nav--logo_text">ReactFacts</div>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar