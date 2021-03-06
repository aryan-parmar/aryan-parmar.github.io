import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { ThemeContext } from './ThemeContext'

export default function Home() {
    var [theme, setTheme] = React.useContext(ThemeContext)
    return (
        <>
            <ThemeProvider theme={theme}>
                <HomeWrapper id='home'>
                    <Data>
                        <SocialIconContainer>
                            <a href="https://github.com/aryan-parmar">
                                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="38px" height="40px">
                                    <path fill="#883eb4" d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" />
                                </Svg>
                            </a>
                            <a href="https://www.linkedin.com/in/aryanparmar114">
                                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 50" width="40px" height="40px">
                                    <path fill="#883eb4" d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z" />
                                </Svg>
                            </a>
                            <a href="https://twitter.com/Aaryan_p114">
                                <Svg width="34.55" height="28.473" viewBox="0 0 34.55 28.473">
                                    <path id="twitter" d="M22.909,5.469a7.268,7.268,0,0,0-7.261,7.261,7.126,7.126,0,0,0,.084.711,18,18,0,0,1-12.3-6.507.673.673,0,0,0-.578-.254.666.666,0,0,0-.531.337,7.109,7.109,0,0,0,.481,7.93c-.173-.076-.361-.118-.523-.209a.669.669,0,0,0-.983.586v.084a7.224,7.224,0,0,0,3.16,5.921.516.516,0,0,1-.063,0,.668.668,0,0,0-.753.858,7.276,7.276,0,0,0,5.022,4.75,12.51,12.51,0,0,1-6.424,1.778,12.572,12.572,0,0,1-1.486-.084.67.67,0,0,0-.439,1.235,19.31,19.31,0,0,0,10.462,3.076A18.805,18.805,0,0,0,25.211,26.6a20.15,20.15,0,0,0,5-13.1c0-.191-.016-.377-.021-.565a14.025,14.025,0,0,0,3.18-3.327.67.67,0,0,0-.837-.983c-.345.154-.748.17-1.109.293a7.107,7.107,0,0,0,1.13-2.092.669.669,0,0,0-.983-.774A12.547,12.547,0,0,1,27.826,7.5,7.207,7.207,0,0,0,22.909,5.469Zm0,1.339A5.928,5.928,0,0,1,27.24,8.691a.674.674,0,0,0,.628.188,13.779,13.779,0,0,0,2.511-.753A5.961,5.961,0,0,1,28.663,9.7a.67.67,0,0,0,.439,1.255,13.835,13.835,0,0,0,1.9-.523A12.719,12.719,0,0,1,29.123,12.1a.667.667,0,0,0-.272.586c.01.272.021.541.021.816a18.837,18.837,0,0,1-4.666,12.2,17.4,17.4,0,0,1-13.433,5.9A17.906,17.906,0,0,1,3.3,29.971,13.86,13.86,0,0,0,10.836,27.1a.67.67,0,0,0-.4-1.193A5.865,5.865,0,0,1,5.4,22.773h.1a7.3,7.3,0,0,0,1.925-.251.67.67,0,0,0-.042-1.3A5.88,5.88,0,0,1,2.8,16.391a7.109,7.109,0,0,0,2.113.439.67.67,0,0,0,.4-1.234,5.929,5.929,0,0,1-2.636-4.938,5.818,5.818,0,0,1,.46-2.134,19.328,19.328,0,0,0,13.329,6.382.678.678,0,0,0,.549-.235.669.669,0,0,0,.141-.581,5.978,5.978,0,0,1-.167-1.36A5.909,5.909,0,0,1,22.909,6.808Z" transform="translate(0.531 -4.969)" fill="#883eb4" stroke="#883eb4" strokeWidth="1" />
                                </Svg>
                            </a>
                        </SocialIconContainer>
                        <BackGround1 src='/bg-1.svg' alt='Home'></BackGround1>
                        <Wrapper className='head'>
                            <h1 style={{ fontSize: '2.8rem', marginBottom: '10px', fontWeight: 'bold', color: theme.colors.primaryFont }}>Hi, I'am Aryan</h1>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', fontWeight: '600', color: theme.colors.secondaryFont }}>Full stack developer</h3>
                            <P>Full stack web development using varies
                                technology developing high quality
                                websites.
                            </P>
                            <ContactButton href='#contact'>CONTACT ME</ContactButton>
                        </Wrapper>
                    </Data>
                    <Scroll>
                        <a href="#about">
                            <h4>KNOW MORE</h4>
                            <Svg xmlns="http://www.w3.org/2000/svg" width="26.241" height="27.619" viewBox="0 0 27.241 28.619">
                                <g id="Arrow" transform="translate(-902.379 -77)">
                                    <line id="Line_1" data-name="Line 1" y2="25" transform="translate(916.5 78.5)" fill="none" stroke="#883eb4" strokeLinecap="round" strokeWidth="3" />
                                    <path id="Path_390" data-name="Path 390" d="M0,0,11.5,11.5" transform="translate(904.5 91.5)" fill="none" stroke="#883eb4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                                    <line id="Line_3" data-name="Line 3" x1="11" y2="12" transform="translate(916.5 91.5)" fill="none" stroke="#883eb4" strokeLinecap="round" strokeWidth="3" />
                                </g>
                            </Svg>
                        </a>
                    </Scroll>
                </HomeWrapper>
            </ThemeProvider>
        </>
    )
}
const HomeWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.background2};
    position: relative;
    `
const Data = styled.div`
    max-width: 90%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 50px auto;
    grid-template-rows: 1fr 1fr;
    margin: 0 30px;
    row-gap: 20px;
    @media (min-width: 1024px) {
        grid-template-columns: 50px 45vw auto;
        grid-template-rows: none;
        column-gap: 20px;
    }
    
    @media (min-width: 1440px) {
        grid-template-columns: 50px 600px auto;
        grid-template-rows: none;
        column-gap: 20px;
        width: 90%
    }
    @media (min-width: 1800px) {
        column-gap: 100px;
    }
`
const SocialIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-top: 30px;
    z-index:2;
    @media (min-width: 1024px) {
        align-self: center;
        margin-top: 0;
    }
    @media (min-width: 1440px) {
        padding-right: 50px;
    }
    a{
        -webkit-tap-highlight-color: transparent;
    }
`
const Svg = styled.svg`
    margin: 10px 0;
    /* z-index:1; */
`
const Wrapper = styled.div`
    grid-column: 1 / span 2;
    display: flex;
    flex-direction: column;
    @media (min-width: 1024px) {
        grid-column: 2;
        grid-row: 1;
        width: 80%;
    }
    @media (min-width: 1440px) {
        width: 80%;
    }
    @media (min-width: 1800px) {
        width: 100%;
        h1{
            font-size: 5rem !important;
        }
    }
`
const BackGround1 = styled.img`
    margin: auto;
    z-index:999;
    @media (min-width: 1024px) {
        height: 60vh;
        max-width: 100%;
    }
    @media (min-width: 1440px) {
        height: 500px;
    }
    @media (min-width: 1800px) {
        height: 60vh;
    }
`
const ContactButton = styled.a`
    -webkit-tap-highlight-color: transparent;
    padding: 20px 10px;
    text-decoration: none;
    font-weight: bold;
    color: white;
    background-color: #A86DDE;
    width: max-content;
    border-radius: 10px;
    box-shadow: 5px 5px 0px 0 #883EB4;
    margin-bottom: 30px;
    &:hover{
        background-color: #A460E2;
    }
    &:active{
        background-color: #A460E2;
        box-shadow: 0px 0px 0px 0 #883EB4;
        transform: translate(5px, 5px);
    }
`
const P = styled.p`
    margin-bottom: 15px;
    font-weight: 500; 
    color: ${props => props.theme.colors.tertiaryFont}; 
    line-height: 25px;
    @media(min-width:1024px){
        margin: 20px 0;
        font-size: 1.1rem;
    }
    @media (min-width: 1440px) {
        font-size: 1.5rem;
        margin-bottom: 50px;
    }
`
const arrowDown = keyframes`
    20%{
        transform: translateY(10px);
    }
    40%{
        transform: translateY(2px);
    }
    60%{
        transform: translateY(10px);
    }
    80%{
        translate: translateY(2px);
    }
    100%{
        translate: translateY(10px);
    }
`
const Scroll = styled.div`
    display: none;
    @media(min-width:1024px){
        display: flex;
        position: absolute;
        bottom: 2%;
        a{
            text-decoration:none;
            color: ${props => props.theme.colors.primaryFont};
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            svg{
                animation: ${arrowDown} linear 2s 1s infinite;
            }
        }
    }
`