import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import axios from "axios";
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export default function MyNavigationBar() {


  // const [pages, setPages] = useState();
  // const [pageCount, setPageCount] = useState(0)
  const [pagesDropDown, setPagesDropDown] = useState([])
  // eslint-disable-next-line

useEffect(() => {

    axios.get(process.env.PUBLIC_URL+"/docs.json").then((response) => {
      let pages=response.data;
      // document.title = details["Name"];


  if (pages){
  const pageNames = Object.keys(pages);
  const pageNamesCount = pageNames.length;
  let pageIndex = [];
  for (let i = 0; i < pageNamesCount; i++) {
    const key = pageNames[i];

      pageIndex.push(
        <NavDropdown.Item as={NavLink} to={"docs?page="+key} key={"pageKey"+i} eventKey={"pageKey"+i}>{key} </NavDropdown.Item>

      );
  };
  setPagesDropDown(pageIndex);}
});
},[]);

  return (
    <Container fluid>
    <div className="row">
    {/* sticky="top" */}
      <Navbar className="navbar-fixed-top" collapseOnSelect expand="md" bg="dark" variant="dark">
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
              <NavDropdown title="Module Docs" id="collasible-nav-dropdown">
                {/* <NavDropdown.Item as={NavLink} to={'docs?page=mycommon'} state={{ from: "the-page-id" }} eventKey={2}>mycommon</NavDropdown.Item> */}
                {pagesDropDown}
                {/* <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item> */}
                {/* <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item> */}
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link as={NavLink} to="#">More deets</Nav.Link> */}
              <Nav.Link as={NavLink} eventKey={3} to="/#">
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
