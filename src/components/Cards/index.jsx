import React from "react";
import styled from "styled-components";

import image17 from '../../images/image17.png'



const Section = styled('section')`
    margin-top: 100px;
    padding: 0 100px;
`

const Text = styled('h1')`
font-family: 'Steppe';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 36px;
`

const ItemTop = styled('div')`
    display: flex;
    justify-content: space-between;
    align-content: center;
    color: #03380393;
    `


const Cards = () => {
    return (
        <Section>
            <ItemTop>
                <Text>Colorful New Arrivals</Text>
                <p>view all</p>
            </ItemTop>
            <div>

            </div>
        

        </Section>
    )
}

export default Cards