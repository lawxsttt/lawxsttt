import React from "react";
import styled from "styled-components";
import img222 from "./img222.png";
import img242 from "./img242.png";
import img2242 from "./img2242.png";

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
  color: #0038a092;
`;

const ImagesContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  gap: 1rem;
`;
// const PositionDiv = styled.div`
//     position: relative;
// `

const PositionDiv = styled("div")`
  position: relative;
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
  background-color: rgba(22, 56, 193, 0.71);
  opacity: 0;
  transition: all 0.3s;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Img = styled("img")`
  width:250px;
  height:390px;
  :hover {
    transform: scale(103%, 103%);
  }
  transition: all 0.2s;
`;
const Cards = () => {
  return (
    <Section>
      <ItemTop>
        <Text>Images for all seasons</Text>
        <p>view all</p>
      </ItemTop>
      <ImagesContainer>
        <Img src={img242} alt="" />
        <Img src={img222} alt="" />
        <Img src={img2242} alt="" />
      </ImagesContainer>
    </Section>
  );
};

export default Cards;
