import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './style.css';

function NavbarEl() {
  return (
    <Navbar expand="md" className="nav">
      <Container>
        <Navbar.Brand>Kai Wright Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="link-style">Home</Link>
            <Link to="projects" className="link-style">Projects</Link>
            <Link to="contact" className="link-style">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEl;