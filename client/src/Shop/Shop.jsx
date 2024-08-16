import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/BookCard.css";

const Shop = () => {
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("https://localhost:5000/all-books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);
  const cartItems = [
    {
      id: 1,
      title: "Item 1",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 2,
      title: "Item 2",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 3,
      title: "Item 3",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 4,
      title: "Item 1",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 5,
      title: "Item 2",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 6,
      title: "Item 3",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 7,
      title: "Item 1",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 8,
      title: "Item 2",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 9,
      title: "Item 3",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 10,
      title: "Item 1",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 11,
      title: "Item 2",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
    {
      id: 12,
      title: "Item 3",
      imageUrl: "https://via.placeholder.com/150",
      author: "Author 3",
      price: "$39.99",
    },
  ];
  return (
    <Container fluid className="px-8 mt-20">
      <Row>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="banner-heading"
        >
          <h2 className="text-5xl text-center font-bold text-black py-8">
            All books are here
          </h2>
        </motion.div>
      </Row>
      <Row>
        {cartItems.map((item) => (
          // <Link key={item.id} to={`/book/${book._id}`}>
          <Col key={item.id} md={4} sm={6} xs={12} style={{ width: "24.8rem" }}>
            <motion.div
            // drag
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.95 }}
            // className="position-relative"
            >
              <Card className="h-100 cart-card">
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    <small className="text-muted">by {item.author}</small>
                  </Card.Text>
                  <Card.Text className="text-primary">{item.price}</Card.Text>
                  <Button
                    className="explore-more-button w-full hover:bg-blue-1000"
                    variant="primary"
                  >
                    <Link>Buy Now</Link>
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          // </Link>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
