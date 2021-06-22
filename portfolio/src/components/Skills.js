import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import { ThemeContext } from './ThemeContext'

export default function Skills() {
    var [theme, setTheme] = React.useContext(ThemeContext)
    var [displayF, setDisplayF] = React.useState('1')
    var [displayB, setDisplayB] = React.useState('0')
    var [heightF, setheightF] = React.useState('max-content')
    var [heightB, setheightB] = React.useState('0px')
    function SkillButton() {
        if (displayF === '1') {
            setDisplayF('0')
            setDisplayB('1')
            setheightF('0px')
            setheightB('max-content')
        } else {
            setDisplayF('1')
            setDisplayB('0')
            setheightF('max-content')
            setheightB('0px')
        }
    }
    return (
        <>

            <ThemeProvider theme={theme}>
                <SkillWrapper id='skills'>
                    <Heading>
                        <H2>SKILLS</H2>
                    </Heading>
                    <Data>
                        <DropdownButton>
                            <Dropdown onClick={SkillButton}>
                                <Svg id="frontend" data-name="frontend" xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
                                    <text id="_" data-name="&lt;/&gt;" transform="translate(0 19)" fill="#a86dde" fontSize="20" fontFamily="Montserrat-Bold, Montserrat" fontWeight="700"><tspan x="0" y="0">&lt;/&gt;</tspan></text>
                                </Svg>
                                <h3 style={{ flex: 1, marginLeft: '10px' }}>Frontend</h3>
                                <Svg width="15.83" height="9.566" viewBox="0 0 15.83 9.566" className={displayF === '1' ? '' : 'rotate'}>
                                    <g id="UP_ARROW" data-name="UP ARROW" transform="translate(2.119 2.119)" >
                                        <line id="Line_5" data-name="Line 5" y1="5.328" x2="5.795" transform="translate(0)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="3" />
                                        <line id="Line_6" data-name="Line 6" x1="5.795" y1="5.328" transform="translate(5.795)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </Svg>
                            </Dropdown>
                            <DropdownF className='dropdown-list' displayF={displayF} heightF={heightF}>
                                <div>
                                    <h4>Html</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>CSS</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '88%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>JavaScript</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '82%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>SCSS</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '88%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>React</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>Redux</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '50%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>Styled Component</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </DropdownF>
                        </DropdownButton>
                        <DropdownButton >
                            <Dropdown onClick={SkillButton}>
                                <Svg width="36.944" height="22.8" viewBox="0 0 36.944 22.8">
                                    <g id="backend" transform="translate(0 0)">
                                        <g id="Group_162" data-name="Group 162" transform="translate(0 0)">
                                            <path id="Path_1283" data-name="Path 1283" d="M2233.743,12303.584l-.149-.7a1.533,1.533,0,0,1,.472-1.45,1.561,1.561,0,0,1,.7-.355l.256-.054a5.236,5.236,0,0,1,.511-1.578l-.173-.19a1.526,1.526,0,0,1,.112-2.151l.536-.48a1.523,1.523,0,0,1,2.149.111l.173.2a5.216,5.216,0,0,1,1.622-.349l.08-.247a1.505,1.505,0,0,1,.426-.657,1.53,1.53,0,0,1,1.489-.318l.684.222a1.527,1.527,0,0,1,.98,1.919l-.08.245a5.1,5.1,0,0,1,.6.57,5.417,5.417,0,0,1,.506.662l.25-.054a1.525,1.525,0,0,1,1.806,1.171l.149.705a1.524,1.524,0,0,1-1.171,1.806l-.256.054a5.229,5.229,0,0,1-.511,1.575l.173.2a1.519,1.519,0,0,1-.112,2.146l-.535.483a1.521,1.521,0,0,1-2.149-.113l-.173-.191a5.3,5.3,0,0,1-1.622.344l-.08.248a1.517,1.517,0,0,1-1.915.974l-.684-.22a1.522,1.522,0,0,1-.978-1.918l.077-.243a5.6,5.6,0,0,1-.6-.571,5.863,5.863,0,0,1-.506-.661l-.251.054A1.529,1.529,0,0,1,2233.743,12303.584Zm7.671-.419a1.783,1.783,0,1,0-2.52-.129A1.787,1.787,0,0,0,2241.414,12303.165Zm12.265-1.08v-.364a2.484,2.484,0,0,1-2.562-2.847v-2.862c0-1.886-.6-2.511-2.626-2.511h-.24a1.372,1.372,0,0,1,0-2.744h.994c3.576,0,5.332,1.169,5.332,4.645v2.235c0,1.742.391,2.55,2.08,2.55h.41a1.724,1.724,0,0,1,0,3.447h-.41c-1.689,0-2.08.793-2.08,2.548v2.625c0,3.5-1.755,4.75-5.332,4.75h-.994a1.374,1.374,0,0,1,0-2.747h.24c2.029,0,2.626-.622,2.626-2.508v-3.138C2251.117,12303.268,2252.015,12302.243,2253.679,12302.085Zm-26.727,0c1.664.158,2.562,1.183,2.562,3.079v3.138c0,1.886.6,2.508,2.626,2.508h.24a1.374,1.374,0,0,1,0,2.747h-.994c-3.577,0-5.332-1.249-5.332-4.75v-2.625c0-1.755-.389-2.548-2.08-2.548h-.408a1.724,1.724,0,0,1,0-3.447h.408c1.691,0,2.08-.808,2.08-2.55v-2.235c0-3.476,1.755-4.645,5.332-4.645h.994a1.372,1.372,0,0,1,0,2.744h-.24c-2.027,0-2.626.625-2.626,2.511v2.862a2.484,2.484,0,0,1-2.562,2.847Z" transform="translate(-2221.843 -12290.757)" fill="#a86dde" />
                                        </g>
                                    </g>
                                </Svg>
                                <h3 style={{ flex: 1, marginLeft: '10px' }}>Backend</h3>
                                <Svg width="15.83" height="9.566" viewBox="0 0 15.83 9.566" className={displayB === '1' ? '' : 'rotate'}>
                                    <g id="UP_ARROW" data-name="UP ARROW" transform="translate(2.119 2.119)">
                                        <line id="Line_5" data-name="Line 5" y1="5.328" x2="5.795" transform="translate(0)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="3" />
                                        <line id="Line_6" data-name="Line 6" x1="5.795" y1="5.328" transform="translate(5.795)" fill="none" stroke="#707070" strokeLinecap="round" strokeWidth="3" />
                                    </g>
                                </Svg>
                            </Dropdown>
                            <DropdownB className='dropdown-list' displayB={displayB} heightB={heightB}>
                                <div>
                                    <h4>Node js</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>Express</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>Python</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '60%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <h4>Mongo db</h4>
                                    <div className='progress-bar'>
                                        <div className='progress-slider' style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </DropdownB>
                        </DropdownButton>
                    </Data>
                </SkillWrapper>
            </ThemeProvider>
        </>
    )
}
const SkillWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: ${props=> props.theme.colors.background};
`
const Heading = styled.div`
    margin-top: 100px;
`
const Dropdown = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    background-color: ${props=> props.theme.colors.skillBtn};
    color: ${props=> props.theme.colors.primaryFont};
    border-radius: 20px;
    z-index: 20;
    cursor: pointer;
    @media (min-width: 1440px) {
        font-size: 1.1rem;
        width:98%;
        margin:auto;
    }
`
const DropdownButton = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    -webkit-tap-highlight-color: transparent;
`
const Data = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(80px, max-content));
    height: 100%;
    width: 90%;
    gap:50px;
`
const H2 = styled.h2`
    margin-top: 50px;
    position: relative;
    color: ${props=> props.theme.colors.primaryFont};
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
    @media (min-width: 1440px) {
        font-size: 2rem;
        margin-bottom: 50px;
    }
`
const Svg = styled.svg`
    margin-left: 20px;
    margin-right: 20px;
`
const DropdownF = styled.div`
    display: flex;
    opacity: ${props => props.displayF};
    height: ${props => props.heightF};
    transition: height 1s ease-in-out, opacity 0.2s ease;
    color: ${props=> props.theme.colors.primaryFont};
    @media (min-width: 1440px) {
        font-size: 1.2rem;
        width:92%;
        margin: auto;
    }
`
const DropdownB = styled.div`
    display: flex;
    opacity: ${props => props.displayB};
    height: ${props => props.heightB};
    transition: height 1s ease-in-out, opacity 0.2s ease;
    color: ${props=> props.theme.colors.primaryFont};
    @media (min-width: 1440px) {
        font-size: 1.2rem;
        width:92%;
        margin: auto;
    }
`