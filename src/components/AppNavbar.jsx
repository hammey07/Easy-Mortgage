import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/em-logo.png";

export default function AppNavbar() {
  return (
    <Navbar bg="" expand="lg" variant="">
      <Container>
        <Navbar.Brand href="#">
          <img className="brand-logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#calculator">Calculator</Nav.Link> */}
            {/* <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
