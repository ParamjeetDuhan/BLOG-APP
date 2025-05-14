import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [Emptytitle, setTitle] = useState({
    title: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:9000/api/v1/add/categories", Emptytitle,
        {
          headers : {
            "Authorization":`Bearer ${localStorage.getItem("token")}`,
          }
        }
      );
      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "An error occurred");
      navigate("/");
    }
  };

  return (
    <div className="mt-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Card>
        <Card.Body>
          <Card.Title>Add a Category</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="categoryTitle">
              <Form.Label>Category Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                name="title" 
                value={Emptytitle.title}
                onChange={(e) =>
                  setTitle({ ...Emptytitle, [e.target.name]: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100">
              Add Category
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Category;
