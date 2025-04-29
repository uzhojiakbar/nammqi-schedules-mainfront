import styled from "styled-components";
import bgimg from '../../assets/bg.jpeg'

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
  background-image: url(${bgimg});
  background-size: cover;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-left:50px ;
  width: 500px;
  gap: 20px;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  h1{
    text-align: center;
  }
  p{
    text-align: center;
  }
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export {
    Container, Form, Input, Button, Img
}