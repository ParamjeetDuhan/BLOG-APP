// src/pages/SingleBlog.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SingleBlog = () => {
  const navigate = useNavigate();
  const [SinglePost, SetSinglePost] = useState(null);  // Initialize as null, not an array
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleBlog = async () => {
      try {
     const res = await axios.get(`http://localhost:9000/api/v1/get/blogs/${id}`, {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
        SetSinglePost(res.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchSingleBlog();
  }, [id]);

  // Check if SinglePost is null or undefined
  if (!SinglePost) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="mt-4">
      {/* Ensure thumbnail exists before using it */}
      {SinglePost.thumbnail && (
        <Card.Img variant="top" src={`http://localhost:9000/uploads/${SinglePost.thumbnail}`} />
      )}
      <Card.Body>
        <Card.Title>{SinglePost.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{SinglePost.category}</Card.Subtitle>
        <Card.Text>{SinglePost.description}</Card.Text>
      </Card.Body>
      <Button onClick={() => navigate("/")}>Back to posts</Button>
    </Card>
  );
};

export default SingleBlog;
