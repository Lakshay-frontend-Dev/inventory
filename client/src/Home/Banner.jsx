import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/Bannerstyle.css";
import ihlogo from "../assets/ihlogo.png";

const Banner = () => {
  return (
    <div className="search-banner">
      <Container fluid>
        <Row className="align-items-center ">
          <Col md={7}>
            {/* Logo Section */}
            <Image src={ihlogo} alt="Logo" className="banner-logo" />
          </Col>
          <Col>
            <Row>
              <Col md={10}>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="banner-heading"
                >
                  Find Your Inventory
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                  className="banner-paragraph"
                >
                  Explore our extensive collection of inventory. Whether you're
                  looking for specific items or just browsing, use the search
                  below to find exactly what you need.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  <Form className="search-form mt-4">
                    <Col className="flex">
                      <Form.Control
                        type="text"
                        placeholder="Search inventory..."
                        className="search-input h-12 "
                      />
                      <Button
                        variant="primary"
                        type="submit"
                        className="search-button h-12"
                      >
                        Search
                      </Button>
                    </Col>
                  </Form>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
