import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "../style/header.css";
import User from "../images/User.gif";

function Header({ cookies, removeCookie }) {
  const [show, setShow] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  const navigate = useNavigate();

  const handleLogOut = () => {
    removeCookie("loginToken");
    navigate("/signin");
  };

  return (
    <>
      <Navbar expand="lg" className="navbar ">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <h3 className="link-hading" style={{ color: "lightseagreen" }}>
              Recipe
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto my-2 my-lg-0 nav-bar-Link" navbarScroll>
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
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
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
            {cookies?.loginToken === undefined ? (
              <Nav className="ms-3">
                <Button
                  variant="light button me-2 sign-in-btn"
                  onClick={() => navigate("/Signin")}
                >
                  Sign-In<i className="bi bi-box-arrow-in-right"></i>
                </Button>
                <Button
                  variant="light button me-2"
                  onClick={() => navigate("/signup")}
                >
                  Sign-Up<i className="bi bi-person-plus"></i>
                </Button>
              </Nav>
            ) : (
              <Nav
                className="ms-3 user-dropdown"
                onMouseEnter={() => setUserDropdown(true)}
                onMouseLeave={() => setUserDropdown(false)}
              >
                {/* <Button
                  variant="light button me-2 sign-in-btn"
                  onClick={() => handleLogOut()}
                >
                  Sign-Out<i className="bi bi-box-arrow-right"></i>
                </Button> */}
                <img
                  src={User}
                  alt="User"
                  className="img-dropdown"
                  width="30"
                  height="30"
                />

                <NavDropdown
                  title="Parth Kathiriya"
                  id="navbarScrollingDropdown"
                  className=" "
                  show={userDropdown}
                >
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile <i class="bi bi-person-badge ps-2"></i>
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/addrecipe">
                    Add Recipe<i class="bi bi-file-earmark-plus ps-2"></i>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/signin"
                    onClick={() => handleLogOut()}
                  >
                    Sign-Out<i className="bi bi-person-x ps-2"></i>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
