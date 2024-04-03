import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

export default function TopNav() {
    const location = useLocation();

    return (
        <Navbar expand="lg" className="navbar-sect">
            <Container>
                <Navbar.Brand>
                    <Link className="links text-white" to="/">
                        Sapphy Doyle
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link>
                            <Link className={`links ${location.pathname === "/" ? "text-white" : ""}`} to="/">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className={`links ${location.pathname === "/about" ? "text-white" : ""}`} to="/about">
                                About
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                className={`links ${location.pathname === "/skills" ? "text-white" : ""}`}
                                to="/skills"
                            >
                                Skills
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                className={`links ${location.pathname === "/history" ? "text-white" : ""}`}
                                to="/history"
                            >
                                History
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                className={`links ${location.pathname === "/contact" ? "text-white" : ""}`}
                                to="/contact"
                            >
                                Contact
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
