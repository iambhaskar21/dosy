import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
export class AboutUsDrop extends Component {
  render() {
    return (
      <>
        
 
        <NavDropdown.Item href="#/action-1">Who We Are  </NavDropdown.Item>
        <NavDropdown.Item href="#/action-2">What We Can Do </NavDropdown.Item>
        <NavDropdown.Item href="#/action-3">Citizen Charter	</NavDropdown.Item>

        <NavDropdown.Item href="#/action-4">History  </NavDropdown.Item>
        <NavDropdown.Item href="#/action-5">Our Divisions/ Field Offices </NavDropdown.Item>
     
      </>
    )
  }
}

export default AboutUsDrop