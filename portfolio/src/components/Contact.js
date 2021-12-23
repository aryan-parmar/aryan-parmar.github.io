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
                        <BackGround src='/bg-3.svg' alt='contact'/>
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
        width: max-content;
        padding: 0 20px;
        &:active{
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
    background-color: #A86DDE;
    border-radius: 10px;
    box-shadow: 5px 5px 0px 0 #883EB4;
    border: none;
    color: white;
    &::placeholder{
        color: white;
    }
`
const TextArea = styled.textarea`
    padding-left: 3%;
    color: white;
    font-size: 1.2rem;
    outline: none;
    border: none;
    border-radius: 20px;
    padding-top: 3%;
    font-family: 'Montserrat';
    font-weight: 600;
    margin-bottom: 20px;
    background-color: #A86DDE;
    border-radius: 10px;
    box-shadow: 5px 5px 0px 0 #883EB4;
    &::placeholder{
        color: white;

    }
`