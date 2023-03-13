import React from "react";
import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import{AiOutlineShoppingCart}from 'react-icons/ai'

import logo from '../../images/logo.png'
import Container from "../../layout/Container";
import { Link } from "react-router-dom";

const Header = styled.header`
background: #5bc49f;
`

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Box = styled(Container)`
    padding: 20px 0;
`
const Li = styled('li')`
    list-style: none;
    color: white;
    text-decoration: none;
`
const Ul = styled.ul`
    display: flex;
    gap: 3em;
    list-style: none;
`

const Links = styled(Link)`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    

`



const links = [
    {
        name:'shop',
        link:'/shop'
    },
    {
        name:'products',
        link:'/product'
    },
    {
        name:'feltilizer',
        link:'/feltilizer'
    },
    {
        name:'guide',
        link:'/guide'



    }
    
]

const Navbar = () =>{

    return(
       <Header>
         <Box>
            <Nav>
                
                <Ul>
                    {links.map((item)=>(
                        <Li><Links to={item.link}>{item.name}</Links></Li>
                    ))}
                </Ul>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <Ul>
                    <li><Links to="/"><AiOutlineSearch/></Links></li>
                    <li><Links to="/"><BsPersonFill/></Links></li>
                    <li><Links to="/"><AiOutlineShoppingCart/></Links></li>


                </Ul>

            </Nav>
        </Box>
       </Header>
    )
}

export default Navbar