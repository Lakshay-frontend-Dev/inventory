import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/BookCard.css";
const BookCards = ({ book, headline }) => {
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
    <div className="px-8">
      <h2 className="text-5xl text-center font-bold text-black py-8">
        {headline}
      </h2>
      <Swiper
        // pagination={{
        //   type: "fraction",
        // }}
        spaceBetween={5}
        // slidesPerView={5}
        // cssMode={true}
        navigation={true}
        pagination={true}
        // mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {cartItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/book/${book._id}`}>
              <Col md={6} sm={6} xs={12} style={{ width: "22rem" }}>
                <motion.div
                // drag
                // whileHover={{ scale: 1.05 }}
                // whileTap={{ scale: 0.95 }}
                // className="position-relative"
                >
                  <Card className="h-100 cart-card">
                    <div className="shopping-icon">
                      <Button variant="light">
                        <FaShoppingCart />
                      </Button>
                    </div>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Text>
                        <small className="text-muted">by {item.author}</small>
                      </Card.Text>
                      <Card.Text className="text-primary">
                        {item.price}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookCards;
