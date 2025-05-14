// src/pages/Category.js
import React, { useState } from 'react';
import { Form, Button, Card, ListGroup } from 'react-bootstrap';

const Category = () => {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState([
    'Tech',
    'Travel',
    'Food',
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      setCategories([...categories, title.trim()]);
      setTitle('');
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
