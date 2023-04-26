import React from "react";
import styled from "styled-components";
import { Images } from "./constants";

const Section = styled("section")`
  margin-top: 100px;
  padding: 0 100px;
`;

const Text = styled("h1")`
  font-family: "Steppe";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
`;

const ItemTop = styled("div")`
  display: flex;
  justify-content: space-between;
  align-content: center;
  color: #00158e9f;
  margin-bottom: 40px;
  margin-left:300px
`;

const ImagesContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  
`;
// const PositionDiv = styled.div`
//     position: relative;
// `

const PositionDiv = styled("div")`
  position: relative;
  transition: 0.6s;
  :hover {
    .text {
      opacity: 1;
    }
  }
`;

const HoverEffect = styled("div")`
  /* display: none; */
  position: absolute;
  color: white;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(45, 82, 168, 0.452);
  opacity: 0;
  transition: all 0.3s;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cards = () => {
  return (
    <Section>
      <ItemTop>
        <Text>What kind of styles you can found there</Text>
        <p>view all</p>
      </ItemTop>
      <ImagesContainer>
        {Images.map((data,i) => (
          <PositionDiv key={i}>
            <img src=
            {data.url} 
             style={{ width: "250px", height: "350px" }}/>
            <HoverEffect className="text">{data.name}</HoverEffect>
        
          </PositionDiv>
        ))}
      </ImagesContainer>
    </Section>
  );
};

export default Cards;
