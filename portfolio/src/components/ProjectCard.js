import React from 'react'
import styled from 'styled-components'

export default function ProjectCard(props) {
    let [ImgUri, redirectUri, name] = [props.ImgUri, props.redirectUri, props.name]
    return (
        <Card>
            <a href={redirectUri} target="_blank" rel="noopener noreferrer">
                <span><h3>{name}</h3></span>
                <Image src={ImgUri} />
            </a>
        </Card>
    )
}
let Card = styled.div`
    width: 450px;
    height: 280px;
    background: #A86DDE;
    border-radius: 10px;
    box-shadow: 5px 5px 0px 0 #883EB4;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content:center;
    :focus-within {
        background-color: #A460E2;
        box-shadow: 0px 0px 0px 0 #883EB4;
        transform: translate(5px, 5px);
    }
    a{
        height: 92%;
        width: 92%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content:center;
        :hover span{
            visibility:visible;
        }
        span{
            position: absolute;
            height: 100%;
            width: 100%;
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0), rgba(0,0,0,0));
            border-radius:10px;
            visibility: hidden;
            h3{
                padding: 5px 4px;
                margin: 0 0 0 2px ;
                color:white;

            }
        }
    }
    @media (max-width: 768px) {
     {
        width: 350px;
        height: 180px;
    }
}
`
let Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit:fill;
    border-radius: 10px;
`