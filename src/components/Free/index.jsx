import React from "react";
import styled from "styled-components";
import img from "./image12345.png";
import { BiPhoneCall } from "react-icons/bi"
import {BsInstagram} from "react-icons/bs"

const ImagesContainer = styled.div`
padding: 30px;
margin: 3rem;
background-image: url(${img});
height: 400px;
background-repeat: no-repeat;
background-size: cover;

`

const Icon = styled('div')`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    color: #002864;
`

const IconInner = styled('div')`
    display: flex;
`


const Text = styled('div')`
    font-size: 40px;
    `
    const ItemTop = styled('div')``

    const Section = styled('div')``
   

const Free = () => {
    return (
<Section>
        <ImagesContainer>
                <Text>Free Shopping Services</Text>
                <p>*only for the same region</p>
                <Icon>
                   <IconInner> <BiPhoneCall size={20}/>
                    <p>+998 33 303 22 95</p>
                    </IconInner>
                    
                    <IconInner><BsInstagram size={18}/> <p>style_foryou</p></IconInner>
                </Icon>
        </ImagesContainer>
    </Section>
    )
}

export default Free