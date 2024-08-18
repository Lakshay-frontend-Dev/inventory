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
      // bg="light"
      expand="lg"
      className="shadow-sm colorful-navbar fixed-top px-8 m-0"
    >
      <Container
        fluid
        className="
      px-8"
      >
        <Navbar.Brand className="text-3xl text-white">
          Inventory Hub
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-xl text-white">
            <motion.div
              className="text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Nav.Link as={Link} to={"/home"} className="text-white">
                <FaHome className="me-2 text-white" />
                Home
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Nav.Link as={Link} to={"/about"} className="text-white">
                <FaInfoCircle className="me-2 text-white" />
                About
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Nav.Link as={Link} to={"/shop"} className="text-white">
                <FaShoppingCart className="me-2 text-white" />
                Shop
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Nav.Link
                as={Link}
                to={"/admin/dashboard"}
                className="text-white"
              >
                <FaBook className="me-2 text-white" />
                Sell Your Book
              </Nav.Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Nav.Link as={Link} to={"/blog"} className="text-white">
                <FaBlog className="me-2 text-white" />
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
