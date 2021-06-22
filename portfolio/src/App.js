import { useState } from 'react'
import './app.css'
import NavbarMobile from './components/NavbarMobile'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { ThemeContext } from './components/ThemeContext';
import * as Theme from './Theme.json'
import { createGlobalStyle } from 'styled-components'

function App() {
    var [theme, setTheme] = useState(Theme.theme2)
    return (
        <>
            <ThemeContext.Provider value={[theme, setTheme]}>
                <GlobalStyle theme={theme} />
                <NavbarMobile theme={theme} />
                <Home theme={theme} />
                <About theme={theme} />
                <Skills theme={theme} />
                <Contact theme={theme} />
            </ThemeContext.Provider>
        </>
    );
}
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;900&display=swap');
*{
    transition: background-color 0.1s linear;
}
body {
    background-color: ${props => props.theme.colors.background};
}
`
export default App;
