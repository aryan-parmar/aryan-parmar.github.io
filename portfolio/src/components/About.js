import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { ThemeContext } from './ThemeContext'

export default function About() {
    var [theme, setTheme] = React.useContext(ThemeContext)
    return (
        <>
            <ThemeProvider theme={theme}>
                <AboutWrapper id='about'>
                    <Data>
                        <Heading className='about-head'>
                            <h1 style={{ fontSize: '3.8rem', marginBottom: '0px', fontWeight: '900', textAlign: 'center', color:theme.colors.aboutPrimary }}>ABOUT</h1>
                            <h3 style={{ fontSize: '2rem', marginBottom: '0px', fontWeight: '900', textAlign: 'center', color: theme.colors.aboutSecondary }}>ME.</h3>
                        </Heading>
                        <BackGround src="/bg-2.svg" alt='about'/>
                        <Wrapper>
                            <P>
                                I am currently a student
                                and I like to create quality
                                things for web and play
                                games. currently I am
                                gaining experience in
                                programming.
                            </P>
                            <SkillButton href="#skills">KNOW MY SKILLS</SkillButton>
                        </Wrapper>
                    </Data>
                </AboutWrapper>
            </ThemeProvider>
        </>
    )
}
const AboutWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=> props.theme.colors.background};
`
const Data = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    align-content: center;
    justify-content: center;
    row-gap: 20px;
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr !important;
    }
`
const Heading = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-content: center;
    justify-content: center;
    width: 100%;
    @media (min-width: 1024px) {
        align-items: flex-start;
    }
    @media (min-width: 1440px) {
        margin-bottom: 0;
    }
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: max-content;
`
const BackGround = styled.img`
    margin: auto;
    height: 100%;
    width: auto;
    @media (min-width: 768px) {
        grid-column: 2;
        grid-row: 1/ span 2;
        width: 100%;
        
    }
    
`
const SkillButton = styled.a`
    -webkit-tap-highlight-color: transparent;
    padding: 20px 10px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    background-color: #A86DDE;
    width: max-content;
    border-radius: 10px;
    box-shadow: 5px 5px 0px 0 #883EB4;
    margin-top:15px;
    &:hover{
        background-color: #A460E2;
    }
    &:active{
        background-color: #A460E2;
        box-shadow: 0px 0px 0px 0 #883EB4;
        transform: translate(5px, 5px);
    }
    @media (min-width: 1024px) {
        margin-left: 0;
        margin-top: 50px;
        align-self: flex-start;
    }
`
const P = styled.p`
    color: ${props=> props.theme.colors.secondaryFont}; 
    font-size: 1.4rem;
    width: 80%;
    text-align: center; 
    margin:auto;
    font-weight: 600;
    line-height: 30px;
    @media (min-width: 1024px) {
        margin-left: 0;
        text-align: left;
        align-self: flex-start;
        justify-self: flex-start;
        height: 100%;
        line-height: 40px;
    }
    @media (min-width: 1440px) {
        align-self: flex-start;
        justify-self: flex-start;
        font-size: 1.5rem;
        line-height: 50px;
    }
`