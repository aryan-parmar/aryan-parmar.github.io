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
                            <a href="https://www.instagram.com/_aryy114/">
                                <Svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="32.369" height="32.369" viewBox="0 0 32.369 32.369">
                                    <path id="Path_1" data-name="Path 1" d="M37.46,17.642a7.267,7.267,0,0,1,7.267,7.267V37.46a7.267,7.267,0,0,1-7.267,7.267H24.909a7.267,7.267,0,0,1-7.267-7.267V24.909a7.267,7.267,0,0,1,7.267-7.267H37.46m0-2.642H24.909A9.939,9.939,0,0,0,15,24.909V37.46a9.939,9.939,0,0,0,9.909,9.909H37.46a9.939,9.939,0,0,0,9.909-9.909V24.909A9.939,9.939,0,0,0,37.46,15Z" transform="translate(-15 -15)" fill="#883eb4" />
                                    <path id="Path_2" data-name="Path 2" d="M86.387,32a1.977,1.977,0,1,0,1.977,1.977A1.977,1.977,0,0,0,86.387,32Z" transform="translate(-61.927 -26.439)" fill="#883eb4" />
                                    <path id="Path_3" data-name="Path 3" d="M46.53,40.933a5.443,5.443,0,1,1-5.44,5.442,5.443,5.443,0,0,1,5.44-5.442m0-2.463a7.906,7.906,0,1,0,5.6,2.309,7.906,7.906,0,0,0-5.6-2.309Z" transform="translate(-30.733 -30.192)" fill="#883eb4" />
                                </Svg>
                            </a>
                            <a href="#">
                                <Svg width="33.495" height="33.495" viewBox="0 0 33.495 33.495">
                                    <path id="facebook" d="M20.748,4A16.748,16.748,0,1,0,37.5,20.748,16.767,16.767,0,0,0,20.748,4Zm0,2.512A14.23,14.23,0,0,1,23.26,34.749V24.934H26.3a.838.838,0,0,0,.831-.734l.314-2.512a.839.839,0,0,0-.831-.94H23.26V17.817a1.676,1.676,0,0,1,1.675-1.675h1.675a.837.837,0,0,0,.837-.837V12.478a.837.837,0,0,0-.762-.834c-.049,0-1.231-.108-2.726-.108-3.69,0-5.723,2.191-5.723,6.169v3.042h-3.35a.837.837,0,0,0-.837.837V24.1a.837.837,0,0,0,.837.837h3.35v9.815A14.23,14.23,0,0,1,20.748,6.512Z" transform="translate(-4 -4)" fill="#883eb4" />
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
    background-color: ${props => props.theme.colors.background};
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