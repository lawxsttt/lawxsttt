import React from "react";
import styled from "styled-components";
import img from "./img1.png";
import img1 from "./img2.png";
import img2 from "./img3.png";

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
  color: #03380393;
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
  background-color: rgba(1, 44, 38, 0.71);
  opacity: 0;
  transition: all 0.3s;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const Img = styled("img")`
  :hover {
    transform: scale(103%, 103%);
  }
  transition: all 0.2s;
`;
const Cards = () => {
  return (
    <Section>
      <ItemTop>
        <Text>Plant Stands</Text>
        <p>view all</p>
      </ItemTop>
      <ImagesContainer>
        <Img src={img} alt="" />
        <Img src={img1} alt="" />
        <Img src={img2} alt="" />
      </ImagesContainer>
    </Section>
  );
};

export default Cards;
