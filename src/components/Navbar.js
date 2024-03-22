import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-sect">
    <Container>
      <Navbar.Brand><Link className="links" to="/">Sapphy Doyle</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link><Link className="links" to="/">Home</Link></Nav.Link>
          <Nav.Link><Link className="links" to="/about">About</Link></Nav.Link>
          <Nav.Link><Link className="links" to="/skills">Skills</Link></Nav.Link>
          <Nav.Link><Link className="links" to="/history">History</Link></Nav.Link>
          <Nav.Link><Link className="links" to="/contact">Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
}