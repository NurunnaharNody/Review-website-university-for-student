import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="title">
            <h1>U F S</h1>
            <Navbar bg="dark" variant="dark">
        <Container>
       <Nav className="mx-auto nav-links">
      <Link to="/home">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">About</Link>
      <Link to="/whyufs">Why UFS</Link>
    </Nav>
    </Container>
    </Navbar>
        </div>
    );
};

export default Header;