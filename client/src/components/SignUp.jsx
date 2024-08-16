import "../styles/SignUp.css";
import signup1 from "../assets/signup1.jpg";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaTwitter, FaGoogle, FaUser } from "react-icons/fa";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Email and Password Patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Handle form validation
  const validate = () => {
    let isValid = true;
    const newErrors = {};

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (!passwordPattern.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSignUp = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Sign-Up Successful!");
      // Clear form data
      setFormData({ email: "", password: "" });
      setErrors({ email: "", password: "" });
    } else {
      toast.error("Please correct the errors in the form.");
    }
  };

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${signup1})`,
        height: "100vh",
        width: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container className="signup-container bg-transparent">
        <Row>
          {/* Left Side */}
          <Col md={8} className="left-container bg-transparent">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2>Welcome!</h2>
              <p>
                Welcome to our vibrant community! By signing up, you unlock
                access to a world of opportunities tailored just for you.
                Whether you're here to explore new skills, connect with
                like-minded individuals, or simply enjoy exclusive content, our
                platform is designed to make your journey enjoyable and
                rewarding.
              </p>

              <Button variant="primary" className="learn-more-button">
                Learn More
              </Button>
            </motion.div>
          </Col>

          {/* Right Side */}
          <Col md={4} className="right-container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <FaUser className="user-icon" />
              <h1 className="font-semibold">Sign Up</h1>
              <Form onSubmit={handleSignUp}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  variant="success"
                  type="submit"
                  className="signup-button"
                >
                  Sign Up
                </Button>
              </Form>

              <div className="social-icons text-white">
                <FaFacebook className="icon facebook-icon" />
                <FaTwitter className="icon twitter-icon" />
                <FaGoogle className="icon google-icon" />
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Toastify Container */}
        <ToastContainer />
      </Container>
    </div>
  );
};

export default SignUp;
