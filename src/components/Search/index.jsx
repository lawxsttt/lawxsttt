import styled from "styled-components"
import { BsSearchHeartFill } from "react-icons/bs"
const Input = styled("input")`
    width: 80%;
    height: 55px;
    color: green;
`
const Form = styled('form')`
    display: flex;
    justify-content: center;
     //background-color: #00ffcc; */
`


const Button = styled('button')`
    width:55px;
    height:55px;
    background-color: #11f01185;
    color: white;
`


const Search = () => {
    return (
        <Form>
            <Input type="search" placeholder="Search flowers..."/>
            <Button>
            <BsSearchHeartFill/>
            </Button>
        </Form>
    )
}

export default Search