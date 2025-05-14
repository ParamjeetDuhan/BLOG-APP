import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await axios.get(`http://localhost:9000/api/v1/get/allblogs`,
           {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
        setPosts(res.data); // Assuming res.data is an array of posts
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        alert("Error fetching blogs. Please try again.");
      }
    };

    fetchAllBlogs();
  }, []);

  return (
    <div className="mt-4 px-4">
      <h2 className="mb-4 text-center">Latest Blog Posts</h2>
      <Row>
        {posts.length > 0 ? (
          posts.map((post) => {
            // Log the thumbnail path to the console for debugging
            console.log("post.thumbnail:", post.thumbnail);
            return (
              <Col md={6} key={post._id} className="mb-4">
                <Card>
                  {post.thumbnail && (
                    <Card.Img 
                      variant="top" 
                      src={`http://localhost:9000/uploads/${post.thumbnail}`} 
                      alt="Blog thumbnail" 
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                      {post.description?.substring(0, 100)}...
                    </Card.Text>
                    <Button as={Link} to={`/blog/${post._id}`} variant="primary">
                      Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <Col>
            <p className="text-center">No blog posts found.</p>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Home;
