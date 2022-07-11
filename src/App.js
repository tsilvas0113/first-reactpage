import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App () {
    const [darkMode, setDarkMode] = React.useState(true)

    function toggle() {
        setDarkMode(prevState => !prevState)
    }

    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode}
                toggleDarkMode={() => toggle(darkMode)}
            />
            <Main 
                darkMode={darkMode}
            />
        </div>
    )
}

export default App