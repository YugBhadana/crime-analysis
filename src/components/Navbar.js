import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Home from "./Home";
const navbar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Crime - Analysis</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Stories">Stories</Nav.Link>
            <Nav.Link href="/States">States</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default navbar;
