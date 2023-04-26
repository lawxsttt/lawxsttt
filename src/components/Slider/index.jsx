import React, { useState } from "react";

import styled from "styled-components";

const Section = styled.section`
  padding: 100px 50px;
`;

const Title = styled.h1`
  font-family: "Steppe";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 100px;
  color: #001684;
`;

const Box = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: #e1e1e1;
  padding: 10px;
  border-radius: 20px 20px 0 0;
`;

const P = styled("p")`
  font-size: 28px;
  margin: 5px;
`;

const Button = styled("button")`
  width: 200px;
  line-height: 45px;
  border: none;
  background-color: #0f3987ac;
  color: white;
  cursor: pointer;
  transition: all 0.5s;
  margin: 15px;
  /* margin-left: 60px; */
  &:hover {
    background-color: #083ce7;
  }
`;

const Cards = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
`;

const Slider = ({ data, onAdd }) => {
  // console.log(data);
  return (
    <Section>
      <Cards>
        {data &&
          data.map((item) => (
            <Box key={item.id}>
              <img
                src={item.img}
                alt=""
                style={{ width: "250px", height: "350px" }}
              />
              <P>{item.price}</P>
              <P>
                {item.name} {item.price}$
              </P>
              <Button onClick={() => onAdd(item)}>Buy Now</Button>
            </Box>
          ))}
      </Cards>
    </Section>
  );
};

export default Slider;
