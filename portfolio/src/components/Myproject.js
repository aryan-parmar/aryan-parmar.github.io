import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import ProjectCard from './ProjectCard'
import { ThemeContext } from './ThemeContext'
export default function Myproject() {
    var [theme, setTheme] = React.useContext(ThemeContext)
    return (
        <>
            <ThemeProvider theme={theme}>
                <ContactWrapper id='projects'>
                    <Heading>
                        <H2>PROJECTS</H2>
                    </Heading>
                    <Wrapper>
                        <ProjectCard ImgUri="/sunnyside.jpg" redirectUri="/SunnySide" name="SunnySide"/>
                        <ProjectCard ImgUri="/calc.jpg" redirectUri="/calculator" name="Calculator"/>
                        <ProjectCard ImgUri="/mechanical.png" redirectUri="/mechanical-keyboard" name="Mechanical keyboard"/>
                        <ProjectCard ImgUri="/discClone.png" redirectUri="https://github.com/aary114/discord-clone" name="Discord clone"/>
                        {/* <ProjectCard ImgUri="/chatsapp.png" redirectUri="https://chatsapp.cf" name="Chatsapp"/> */}
                    </Wrapper>
                </ContactWrapper>
            </ThemeProvider>
        </>
    )
}
const ContactWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.background2};
    width: 100%;
`
const Heading = styled.div`
    margin-bottom: 50px;
    margin-top: 50px;
`
const H2 = styled.h2`
    margin-top: 50px;
    position: relative;
    color: ${props => props.theme.colors.primaryFont};
    &:after{
        content:"";
        position: absolute;
        width: 40px;
        height: 5px;
        border-radius: 20px;
        background-color:#8265A7;
        left: 50%;
        transform: translate(-50%,0);
        bottom: -10px;
    }
`
const Wrapper = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 500px));
    align-items: center;
    justify-content:center;
    gap: 50px;
    margin-bottom: 50px;
`