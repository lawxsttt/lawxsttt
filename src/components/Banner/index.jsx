import React from 'react'
import styled from 'styled-components';
import img from '../../images/banner.png';
import { ArrowRight } from 'react-feather';

const Section = styled('section')`
  background-color: #5bc49f;
  color: white;
`

const Container = styled('div')`
  
  display: flex;
  margin: 0 3rem;
`

const Left = styled('div')`
  
`
const Right = styled('div')`
  
`

const BtnContainer = styled('div')`
  margin: 3rem 0;

`
const Button = styled('button')`
  padding: 10px 20px;
  border: none;
  &:first-child{
    color: #004F44;
    -webkit-box-shadow: 14px 3px 41px 23px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 14px 3px 41px 23px rgba(34, 60, 80, 0.2);
    box-shadow: 14px 3px 41px 23px rgba(34, 60, 80, 0.2);
  }
  &:last-child{
    background: none;
    color: white;
 }
`
const Header = styled('h1')`
  font-size: 50px;
  width: 300px;
  display: flex;

`

const Banner = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Header>Happiness blooms from within</Header>
          <p>Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.</p>
          <BtnContainer>
            <Button>shop now</Button>
            <Button>Explore plants <ArrowRight/></Button>
          </BtnContainer>
        </Left>
        <Right>
          <img src={img} alt="" />
        </Right>
      </Container>
    </Section>
  )
}

export default Banner