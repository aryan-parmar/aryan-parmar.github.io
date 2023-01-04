import React, { useState, Suspense } from "react";
import "./app.css";
import NavbarMobile from "./components/NavbarMobile";
import { ThemeContext } from "./components/ThemeContext";
import Theme from "./Theme.json";
import { createGlobalStyle } from "styled-components";
import Preloader from "./components/Preloader";
import Home from "./components/Home";
const About = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/About")), 1000)
    )
);
const Myproject = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/Myproject")), 1200)
    )
);
const Skills = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/Skills")), 1500)
    )
);
const Contact = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./components/Contact")), 1600)
    )
);

function App() {
  var [theme, setTheme] = useState(Theme.theme2);
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <GlobalStyle theme={theme} />
        <Preloader theme={theme} />
        <NavbarMobile theme={theme} />
        <Suspense fallback={<div>Loading</div>}>
          <Home theme={theme} />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <About theme={theme} />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Myproject theme={theme} />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Skills theme={theme} />
        </Suspense>
        <Suspense fallback={<div>Loading</div>}>
          <Contact theme={theme} />
        </Suspense>
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
    background-color: ${(props) => props.theme.colors.background};
}
`;
export default App;
