// src/pages/Blog.js
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    thumbnail: null,
  });

  const categories = ['Tech', 'Travel', 'Food', 'Lifestyle']; // Replace with dynamic categories if needed

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'thumbnail' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);

    // Optional: handle image upload or API call here
  };

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: '600px' }}>
      <Card.Body>
        <Card.Title className="mb-4 text-center">Create Blog Post</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter blog title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Write your blog content..."
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Thumbnail</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="thumbnail"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Publish Post
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddBlog;
