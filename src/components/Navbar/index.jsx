import React from "react";
import styled from "styled-components";
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import{AiOutlineShoppingCart}from 'react-icons/ai'

import logo from '../../images/logo.png'
import Container from "../../layout/Container";

const Header = styled.header`
background: #004F44;
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

const Link = styled.a`
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
        name:'products'
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
                        <Li><Link href={item.link}>{item.name}</Link></Li>
                    ))}
                </Ul>
                <a href="#">
                    <img src={logo} alt="" />
                </a>
                <Ul>
                    <li><Link href=""><AiOutlineSearch/></Link></li>
                    <li><Link href=""><BsPersonFill/></Link></li>
                    <li><Link href=""><AiOutlineShoppingCart/></Link></li>


                </Ul>

            </Nav>
        </Box>
       </Header>
    )
}

export default Navbar