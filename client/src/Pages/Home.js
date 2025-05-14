// src/pages/Home.js
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Sample blog post data
const posts = [
  {
    id: 1,
    title: 'Welcome to My Blog',
    excerpt: 'This is a simple blog app built with React and Bootstrap...',
    author: 'John Doe',
  },
  {
    id: 2,
    title: 'React Router Tips',
    excerpt: 'Learn how to use React Router for single-page navigation...',
    author: 'Jane Smith',
  },
];

const Home = () => {
  return (
    <div className="mt-4">
      <h2 className="mb-4 text-center">Latest Blog Posts</h2>
      <Row>
        {posts.map((post) => (
          <Col md={6} key={post.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  By {post.author}
                </Card.Subtitle>
                <Card.Text>{post.excerpt}</Card.Text>
                <Button as={Link} to={`/post/${post.id}`} variant="primary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
