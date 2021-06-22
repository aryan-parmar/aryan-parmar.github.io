import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { ThemeContext } from './ThemeContext'

export default function Contact() {
    var [theme, setTheme] = React.useContext(ThemeContext)
    return (
        <>
            <ThemeProvider theme={theme}>
                <ContactWrapper id='contact'>
                    <Heading>
                        <H2>CONTACT</H2>
                    </Heading>
                    <Wrapper>
                        <BackGround src='/bg-3.svg' />
                        <Form action="https://formsubmit.co/aeb9c4d5d55a289f46bb8893cd721cd2" method="POST">
                            <Input type='text' placeholder="Name" required={true} name='name'/>
                            <Input type='email' placeholder="Email" required={true} name='email'/>
                            <TextArea placeholder='Message' rows='10' required={true} name='message'/>
                            <Input type='submit' value="Submit" className="submit-btn" />
                        </Form>
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
    background-color: ${props => props.theme.colors.background};
    width: 100%;
`
const Heading = styled.div`
    margin-bottom: 50px;
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
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-bottom: 50px;
`
const BackGround = styled.img`
    margin: auto;
    height: 100%;
    width: auto;
    @media (min-width: 768px) {
        width: 80%;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    .submit-btn{
        box-shadow: 3px 1px 10px 0 ${props => props.theme.colors.dropShadowColor};
        color:#B879B1;
        width: max-content;
        padding: 0 20px;
        &:active{
            border: 2px solid grey;
            box-shadow: 0px 0px 0px 0 #883EB4;
            transform: translate(5px, 5px);
        }
    }
`
const Input = styled.input`
    margin-bottom: 20px;
    height: 50px;
    padding-left: 3%;
    border-radius: 20px;
    outline: none;
    font-size: 1.2rem;
    font-weight: 600;
    box-shadow: 3px 1px 10px 0 ${props => props.theme.colors.dropShadowColor};
    border: none;
    background-color: ${props => props.theme.colors.background};
    color: #B879B1;
    &::placeholder{
        color: #B879B1;
    }
`
const TextArea = styled.textarea`
    padding-left: 3%;
    color: #B879B1;
    box-shadow: 3px 1px 10px 0 ${props => props.theme.colors.dropShadowColor};
    font-size: 1.2rem;
    outline: none;
    border: none;
    border-radius: 20px;
    padding-top: 3%;
    font-family: 'Montserrat';
    font-weight: 600;
    background-color: ${props => props.theme.colors.background};
    margin-bottom: 20px;
    &::placeholder{
        color: #B879B1;

    }
`