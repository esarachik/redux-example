import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <h4>CodeLife</h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="">
              <h4>Home</h4>
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              href="/add-vinyl"
              to="/add-vinyl"
            >
              <h4>Add Vinyl</h4>
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              <h4> News</h4>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
