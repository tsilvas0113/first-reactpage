import React from "react"
import logo from '../reactjs-icon.png'

function Navbar () {
    return (
        <nav className="nav-container">
            <div className="logo-container">
                <img src={logo} className='logo' alt='logo-image' />
                <div className="logo-text">ReactFacts</div>
            </div>
            <div className="nav-text">React Course - Project 1</div>
        </nav>
    )
}

export default Navbar