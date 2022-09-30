import React, { useState } from "react";
import "../style/navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet } from "react-router-dom";
import "../style/header.css";

function Header() {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <>
      <Navbar expand="lg" className="navbar">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <h3 className="link-hading" style={{color: "lightseagreen"}}>Recipe</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 nav-bar-Link"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/" className="mx-4 ">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mx-4">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-4">
                Contact
              </Nav.Link>
              <NavDropdown
                title="Category"
                id="navbarScrollingDropdown"
                className="mx-4 "
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item as={Link} to="/breakfast">
                  BreakFast
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dinner">
                  Dinner
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/lunch">
                  Lunch
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/dessert">
                  Dessert
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/home">
                  Extra
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/recipe" className="mx-4 ">
                Recipes
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success me-2">Search</Button>
            </Form> */}
          </Navbar.Collapse>
          <Nav className="ms-3">
            <Button variant="light button me-2 sign-in-btn">Sign-In<i className="bi bi-box-arrow-in-right"></i></Button>
            <Button variant="light button me-2">Sign-Up<i className="bi bi-person-plus"></i></Button>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Header;
