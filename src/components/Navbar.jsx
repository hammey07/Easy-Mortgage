import { Navbar, Nav, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/em-logo.png";

export default function Navigation() {
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      sticky="top"
      className="navbar-custom px-4 px-md-5"
    >
      <div className="container-xxl px-0 px-md-4">
        <Link to="/" className="brand-text">
          Easy<span className="accent">Mortgage</span>
        </Link>
        {/* <Navbar.Brand as={Link} to="/" className="fw-bold">
          <img className="brand-logo" src={logo} alt="Easy Mortgage logo" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/calculator" className="nav-link-custom">
              Calculator
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
