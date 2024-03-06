import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './style.css';
import { Button } from 'react-bootstrap';


function NavbarEl() {
  return (
    <Navbar expand="md" className="nav">
      <Container fluid>
        <a className="d-md-none ms-3 navbar-brand">Kai Wright</a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" w-100 me-auto align-items-center">
            <Link to="/" className="link-style">Home</Link>
            <Link to="projects" className="link-style">Projects</Link>
            <Link to="contact" className="link-style">Contact</Link>
            <div className='logo-container'>
              <a className="d-none d-md-block navbar-brand">Kai Wright</a>
            </div> 
            
          </Nav>
          
            <div className='button-group d-flex align-items-center ms-2'>
              <Button>
                <i className="fa-brands fa-behance fa-lg"></i>
              </Button>
              <Button>
                <i className="fa-brands fa-linkedin-in fa-lg"></i>
              </Button>
              <Button>
                <i className="fa-brands fa-github fa-lg"></i>
              </Button>
              <Button>
                <i className="fa-solid fa-envelope fa-lg"></i>
              </Button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEl;