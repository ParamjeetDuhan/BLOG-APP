// src/pages/AddBlog.js
import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    thumbnail: null,
  });

  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch categories from the backend
  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios.get("http://localhost:9000/api/v1/get/categories", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setCategories(res.data); // Assumes res.data is an array of category objects
      } catch (err) {
        alert("Failed to fetch categories");
      }
    };
    fetchAllCategories();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'thumbnail') {
      setFormData({ ...formData, thumbnail: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Submit the blog form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.append("title", formData.title);
    postData.append("category", formData.category);
    postData.append("description", formData.description);
    if (formData.thumbnail) {
      postData.append("thumbnail", formData.thumbnail);
    }

    try {
      const res = await axios.post("http://localhost:9000/api/v1/add/blog", postData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert(res.data.message || "Blog added successfully!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Error adding blog");
    }
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
                <option key={idx} value={cat._id}>
                  {cat.title}
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
