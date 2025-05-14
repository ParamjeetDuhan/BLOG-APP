import React,{useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"

import { Form, Button, Card } from 'react-bootstrap';

const Register = () => {
  const navigate = useNavigate();
  const [Input,setInput] = useState({
    username:"",
    email:"",
    password:""
  });

  const handleSubmit = async (e)=>{
             e.preventDefault();
             try {
            const res=  await axios.post("http://localhost:9000/api/v1/user/register",Input);
                alert(res.data.message)
                navigate("/login");
             } catch (error) {
              alert(error.response.data.message);
             }
  }
  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: '400px' }}>
      <Card.Body>
        <Card.Title className="mb-4 text-center">Register</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label> name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name='username' value={Input.username} onChange={(e)=>setInput({...Input,[e.target.name]: e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"name='email' value={Input.email} onChange={(e)=>setInput({...Input,[e.target.name]: e.target.value})} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={Input.password} onChange={(e)=>setInput({...Input,[e.target.name]: e.target.value})} />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;

