import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import "../styles/nav.css"

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6366449a7130f745d745afab_tolt-logo-v2.svg" 
            width="80"
            height="60"
            className="d-inline-block align-top"
            alt=" logo"
          />
          <img className='sec-image' width="120" height="60" src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/649fedd275853314cc968559_Stripe%20Partner%20Badge.svg" alt="" />
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{fontSize : "20px" , marginRight : "10px" }} href="#home">Home</Nav.Link>
            <Nav.Link style={{fontSize : "20px" , marginRight : "10px"}} href="#platform">Platform</Nav.Link>
            <Nav.Link style={{fontSize : "20px" , marginRight : "10px"}} href="#pricing">Pricing</Nav.Link>
            <Nav.Link style={{fontSize : "20px"}} href="#resources">Resources</Nav.Link>
          </Nav>
          <Nav>
          <Button variant="success" style={{marginRight: "10px"}}>Login</Button>{' '}
            <Button variant="primary" style={{marginRight: "10px"}}>Start your 14 days free trial!</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
