import React from "react";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";

const Container = styled("form")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 60vh;
  border-radius: 8px;
  padding: 40px;
  display: flex;
  background-color: #154aa6c6;
  width: 500px;
  margin-top: 4rem;
`;
const Input = styled("input")`
  padding: 10px 20px;
  width: 400px;
  height: 50px;
  border-radius: 50px;
  border: none;
`;

const InputDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  color: white;
`;

const P = styled("p")`
  font-size: 14px;
`;

const ContainerBig = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const Button = styled.button`
  padding: 10px 15px;
  cursor: pointer;
  width: 240px;
  border-radius: 50px;
  border: none;
  background-color: #1651e7f3;
  color: white;
`;
const ContainerBigger = styled("div")`
  display: flex;
  justify-content: center;
`;

const Checkbox = styled("input")`
  border-radius: 50px;
`;

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <ContainerBigger>
      <Container>
        <img src={logo} />
        <Input type="text" placeholder="Username or Email" />
        <Input type="password" placeholder="Password" />
        <ContainerBig>
          <InputDiv>
            <Checkbox type="checkbox" name="" id="" />
            <h4>Remember me</h4>
          </InputDiv>
          <Button onClick={(e) => signInWithGoogle(e)}>login</Button>
        </ContainerBig>
      </Container>
    </ContainerBigger>
  );
};
export default LoginPage;
