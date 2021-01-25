import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navs() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="/">Office Cafeteria App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navs;
