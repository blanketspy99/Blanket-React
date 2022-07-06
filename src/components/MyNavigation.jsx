import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export default function MyNavigationBar() {
  return (
    <Container fluid>
    <div className="row">
      <Navbar sticky="top" className="navbar-fixed-top" collapseOnSelect expand="md" bg="dark" variant="dark">
        {" "}
        {/* bg="dark" variant="dark"*/}
          {/* <Container fluid> */}
          <Navbar.Brand href={process.env.PUBLIC_URL+"/"}><img src={process.env.PUBLIC_URL+"/favicon.ico"} alt="logo" height="30px"></img> Blanket</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to={"experience"} eventKey={1}>Resume</Nav.Link>
              {/* <Nav.Link href="experience">Resume</Nav.Link> */}
              <Nav.Link as="a" href="https://github.com/blanketspy99" target="_blank">Repos</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              {/* <Nav.Link as={NavLink} to="#">More deets</Nav.Link> */}
              <Nav.Link as={NavLink} eventKey={2} to="/#">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
      </Navbar>
    </div>
    </Container>
  );
}
