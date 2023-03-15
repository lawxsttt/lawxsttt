import styled from "styled-components"

const Input = styled("input")`
    width: 80%;
    height: 55px;
    color: green;
`
const Form = styled('form')`
    display: flex;
    justify-content: center;
`

const Search = () => {
    return (
        <Form>
            <Input type="search" placeholder="Search flowers..."/>
        </Form>
    )
}

export default Search