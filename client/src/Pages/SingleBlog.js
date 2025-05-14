// src/pages/SingleBlog.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// Sample posts (you can replace this with actual state or API data)
const posts = [
  {
    id: '1',
    title: 'Welcome to My Blog',
    category: 'Tech',
    description: 'This is a detailed article about building blogs in React...',
    thumbnail: 'https://via.placeholder.com/600x300?text=Blog+1',
  },
  {
    id: '2',
    title: 'React Router Tips',
    category: 'Tech',
    description: 'Learn how to use React Router for clean navigation...',
    thumbnail: 'https://via.placeholder.com/600x300?text=Blog+2',
  },
];

const SingleBlog = () => {
  const { id } = useParams();
  const blog = posts.find((post) => post.id === id);

  if (!blog) return <h2 className="mt-4 text-center">Blog Not Found</h2>;

  return (
    <Card className="mt-4">
      <Card.Img variant="top" src={blog.thumbnail} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{blog.category}</Card.Subtitle>
        <Card.Text>{blog.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBlog;
