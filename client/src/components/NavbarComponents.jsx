import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaHome,
  FaInfoCircle,
  FaShoppingCart,
  FaBook,
  FaBlog,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/Navbarstyle.css";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavbarComponents = () => {
  return (
    // <motion.div
    //   initial={{ y: -250 }}
    //   animate={{ y: 0 }}
    //   transition={{ type: "spring", stiffness: 120 }}
    // >
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm colorful-navbar fixed-top px-8 m-0"
    >
      <Container fluid className="
      px-8">
        <Navbar.Brand className="text-3xl">Inventory Hub</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-xl">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link as={Link} to={"/home"}>
              <FaHome className="me-2" />
              Home
            </Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link as={Link} to={"/about"}>
              <FaInfoCircle className="me-2" />
              About
            </Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link as={Link} to={"/shop"}>
              <FaShoppingCart className="me-2" />
              Shop
            </Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link as={Link} to={"/admin/dashboard"}>
              <FaBook className="me-2" />
              Sell Your Book
            </Nav.Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Nav.Link as={Link} to={"/blog"}>
              <FaBlog className="me-2" />
              Blog
            </Nav.Link>
          </motion.div>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // </motion.div>
  );
};

export default NavbarComponents;
