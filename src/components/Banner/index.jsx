import React from "react";
import styled from "styled-components";
import img from "../../images/banner.png";
import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import { ArrowRight } from "react-feather";

const Section = styled("section")`
  background-color: #5f88c5;
  color: white;
`;

const Container = styled("div")`
  display: flex;
  margin: 0 3rem;
  justify-content: space-around;

`;

const Left = styled("div")``;
const Right = styled("div")`
  display: flex;
  gap: 1rem;
  margin:30px;
`;

const BtnContainer = styled("div")`
  margin: 3rem 0;
  display: flex;
`;
const Button = styled("button")`
  padding: 10px 20px;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    opacity: 1;
    background-color: #8e96b8ac;
  }
  &:first-child {
    color: #004f44;
    -webkit-box-shadow: 14px 3px 41px 23px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 14px 3px 41px 23px rgba(34, 60, 80, 0.2);
    box-shadow: 14px 3px 41px 23px rgba(34, 60, 80, 0.2);
  }
  &:last-child {
    background: none;
    color: white;
  }
`;
const Header = styled("h1")`
  font-size: 50px;
  width: 300px;
  display: flex;
`;

const RightSub = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Banner = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Header>
Love for clothes blossoms from within</Header>
          <p>
            Our environment, the world in which we live and work, is a mirror of
            our attitudes and expectations.
          </p>
          <BtnContainer>
            <Button>shop now</Button>
            <Button>
              Explore clothes <ArrowRight />
            </Button>
          </BtnContainer>
        </Left>
        <Right>
          <img src={photo2} alt="" width={"350px"} height={"550px"} />
        </Right>
      </Container>
    </Section>
  );
};

export default Banner;
