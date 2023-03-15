import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import img from '../../images/img.png'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import styled from 'styled-components';

const Section = styled.section`
  padding: 100px 50px;

`

const Title = styled.h1`
  font-family: 'Steppe';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  margin-bottom: 100px;
  color: #004F44;
`


const data = [
  {
    id:1,
    img,
    name: "Peperomia Ginny $25",
   
  },
  {
    id:2,
    img:img1,
    name: "Birds Nest Fern $45",
  
   
  },

  {
    id:3,
    img:img2,
    name: "Large Majesty Palm $52",

   
  },
  {
    id:4,
    img:img3,
    name: "Pet Friendly Plant $30",
   
  }, 
  {
    id:5,
    img,
    name: "Peperomia Ginny",
  
  },
  {
    id:6,
    img,
    name: "Peperomia Ginny",


  },
  
]

const P = styled('p')`
  font-size: 28px;
`

const Button = styled('button')`
  border: none;
  padding: .7rem 1rem;
  background-color: #004F44;
  color: white;
  cursor: pointer;
  transition: all .5s;
  &:hover{
    background-color: lightgreen;
  }
`



const Slider = () => {
  return (
    <Section>
      <Title>Featured</Title>
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        data.map((item)=>(
          <SwiperSlide key={item.id}>
            <img src={item.img} alt="" />
            <P>{item.price}</P>
            <P>{item.name}</P>
            <Button>Buy Now</Button>
          </SwiperSlide>

        ))
      }
    </Swiper>
    </Section>

  )
}

export default Slider