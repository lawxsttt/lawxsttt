import styled from "styled-components";
import { BsSearchHeartFill } from "react-icons/bs";

const Input = styled("input")`
  width: 80%;
  height: 50px;
  color: #06519c;
  padding: 5px 10px;
`;
const Form = styled("form")`
  width: 100%;
  display: flex;
  justify-content: center;
  //background-color: #023a73; */
`;

const Button = styled("button")`
  width: 50px;
  height: 50px;
  background-color: #005b9cc8;
  color: white;
  border: none;
  cursor: pointer;
`;

const Search = () => {
  return (
    <Form>
      <Input type="search" placeholder="Search..." />
      <Button>
        <BsSearchHeartFill />
      </Button>
    </Form>
  );
};

export default Search;
