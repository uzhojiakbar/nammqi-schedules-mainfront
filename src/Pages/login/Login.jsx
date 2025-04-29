import React, { useState } from 'react';
import { Button, Container, Input, Form, Img } from './style';
import { NavLink } from 'react-router-dom';
import { useLogin } from '../../server';

function Login() {
  const { mutate } = useLogin()
  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }
  const handleSumbit = (e) => {
    e.preventDefault()
    mutate(loginData)
  }
  return (
    <Container>
      <Form onSubmit={handleSumbit}>
        <h1>Kirish</h1>
        <Input onChange={handleChange} type="text" name='username' placeholder="Username" />
        <Input onChange={handleChange} type="password" name='password' placeholder="Password" />
        <Button type="submit">Login</Button>
        <p>Ro'yxatdan O'tmaganmisiz <NavLink to={'/register'}>Royhatdan otish</NavLink></p>
      </Form>
    </Container>
  );
}

export default Login;
