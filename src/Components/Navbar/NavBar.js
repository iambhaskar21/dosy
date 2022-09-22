import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AboutUsDrop from './Navlist/AboutUsDrop/AboutUsDrop';
import DocumentsDrop from './Navlist/DocumentsDrop/DocumentsDrop';
import InformationServices from './Navlist/InformationServicesDrop/InformationServices';
export default function NavBar() {
  return (
    <>
<Navbar className="nav "expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand className="nav-head" href="#home">DOSY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to="/">Home</Nav.Link>
            

            <NavDropdown title="Information & Services" id="basic-nav-dropdown">
              <InformationServices/>
            </NavDropdown>


            <NavDropdown title="Documents" id="basic-nav-dropdown">
              <DocumentsDrop/>
            </NavDropdown>

            <NavDropdown title="About Us" id="basic-nav-dropdown">
             <AboutUsDrop/>
            </NavDropdown>

            <Nav.Link  as={Link} to="/more">More</Nav.Link>




          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        
    </>
  )
}
