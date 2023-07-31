import React from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Menu() {
  return (
    <Container>
      <Row>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">
              React-SuperHeroes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="marvel">
                  Marvel
                </Nav.Link>
                <Nav.Link as={Link} to="heroes">
                  Heroes
                </Nav.Link>
                <NavDropdown title="Rick & Morty" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="rickMorty/personajes">
                    Personajes
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="rickMorty/episodes">
                    Episodios
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <section>
          <Outlet></Outlet>
        </section>
      </Row>
    </Container>
  );
}

export default Menu;
