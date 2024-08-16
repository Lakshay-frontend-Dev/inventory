import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  FaTachometerAlt,
  FaUpload,
  FaUsers,
  FaProductHunt,
  FaSignInAlt,
  FaSignOutAlt,
  FaArrowUp,
  FaBookOpen,
  FaQuestionCircle,
} from "react-icons/fa";
import "../styles/SideBar.css"; // Custom CSS file
import profile from "../assets/profile.jpg"
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="flex-column">
      <Container>
        <Nav className="flex-column">
          <Navbar.Brand href="#home" className="mb-4 h-6 w-6">
            <img src={profile} alt="Logo" />
            {/* <span>hello</span> */}
          </Navbar.Brand>
          <Nav.Link as={Link} to={"/admin/dashboard"} className="sidebar-link">
            <FaTachometerAlt className="me-2" /> <span>Dashboard</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/admin/dashboard/upload"}
            className="sidebar-link"
          >
            <FaUpload className="me-2" /> <span>Upload Book</span>
          </Nav.Link>
          <Nav.Link
            as={Link}
            to={"/admin/dashboard/manage"}
            className="sidebar-link"
          >
            <FaBookOpen className="me-2" />
            <span>Manage Book</span>
          </Nav.Link>
          <Nav.Link href="#users" className="sidebar-link">
            <FaUsers className="me-2" /> <span>Users</span>
          </Nav.Link>
          <Nav.Link href="#products" className="sidebar-link">
            <FaProductHunt className="me-2" /> <span>Products</span>
          </Nav.Link>
          <Nav.Link href="#sign-in" className="sidebar-link">
            <FaSignInAlt className="me-2" /> <span>Sign In</span>
          </Nav.Link>
          <Nav.Link as={Link} to={"/home"} className="sidebar-link">
            <FaSignOutAlt className="me-2" /> <span>Log Out</span>
          </Nav.Link>
          <hr className="my-3"></hr>
          <Nav.Link href="#upgrade" className="sidebar-link">
            <FaArrowUp className="me-2" /> <span>Upgrade to Pro</span>
          </Nav.Link>
          <Nav.Link href="#documentation" className="sidebar-link">
            <FaBookOpen className="me-2" /> <span>Documentation</span>
          </Nav.Link>
          <Nav.Link href="#help" className="sidebar-link">
            <FaQuestionCircle className="me-2" /> <span>Help</span>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SideBar;
