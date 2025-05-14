// src/pages/Login.js
import React,{useState} from 'react';
import axios from 'axios';

import { Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  const[initialvalue,SetValue] = useState({
       email:"",
       password:""
  });

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
       const res = await axios.post("http://localhost:9000/api/v1/user/login",initialvalue);
       alert(res.data.message)
       console.log(res.data.message)
    } catch (error) {
      alert(error.response.data.message)
    }
  }
  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: '400px' }}>
      <Card.Body>
        <Card.Title className="mb-4 text-center">Login</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={initialvalue.email}  onChange={(e)=>SetValue({...initialvalue,[e.target.name]:e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={initialvalue.password}  onChange={(e)=>SetValue({...initialvalue,[e.target.name]:e.target.value})}/>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
