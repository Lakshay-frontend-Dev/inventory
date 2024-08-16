import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "../styles/FooterComponents.css";

const FooterComponents = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="justify-content-between px-8 py-3">
          <Col md={3}>
            <h5>About Us</h5>
            <p>
              We are a platform dedicated to helping users find the best books
              and resources. Stay connected with us through our social media
              channels.
            </p>
          </Col>
          <Col md={2}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#shop">Shop</a>
              </li>
              <li>
                <a href="#sell">Sell Your Book</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#about-company">About Company</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#legal">Legal Notices</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
              <li>
                <a href="#help-center">Help Center</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="border-t-2 foot2 px-8">
          <Col className="flex flex-wrap justify-between">
            <p>&copy; 2024 SkillSwap. All rights reserved.</p>
            <div className="social-icons flex flex-wrap">
              <a href="https://facebook.com" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/lakshay_.verma_/"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshay-verma-b70b42301/" _self
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponents;
