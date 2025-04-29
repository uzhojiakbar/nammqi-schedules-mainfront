import React, { useState } from 'react';
import { Button, Container, Form, Input } from '../login/style';
import { NavLink } from 'react-router-dom';
import { useRgister } from '../../server';
function Register() {
  

  const {mutate} = useRgister()

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    role:"user"
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setRegisterData({ ...registerData, [name]: value })
  }
  const handleSumbit = (e) => {
    e.preventDefault()
    mutate(registerData)
  }
  return (
    <Container>
      <Form onSubmit={handleSumbit}>
        <h1>Register</h1>
        <Input required onChange={handleChange} name='username' type="text" placeholder="Username" />
        <Input required onChange={handleChange} name='password' type="password" placeholder="Password" />
        <Input required onChange={handleChange} name='firstname' type="text" placeholder="Firstname" />
        <Input required onChange={handleChange} name='lastname' type="text" placeholder="Lastname" />
        <Button type="submit">Register</Button>
        <p>Ro'yxatdan o'tganmisiz <NavLink to={'/login'}>Kirish</NavLink></p>
      </Form>
    </Container>
  );
}

export default Register;
