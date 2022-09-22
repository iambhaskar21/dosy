import React, { Component } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
export class DocumentsDrop extends Component {
  render() {
    return (
      <>
       


        <NavDropdown.Item href="#/action-1">Notification   </NavDropdown.Item>
        <NavDropdown.Item href="#/action-2">Office Order </NavDropdown.Item>
        <NavDropdown.Item href="#/action-3">Guidelines	</NavDropdown.Item>

        <NavDropdown.Item href="#/action-4">Forms   </NavDropdown.Item>
        <NavDropdown.Item href="#/action-5">Budget</NavDropdown.Item>
        <NavDropdown.Item href="#/action-6">Acts & Policies</NavDropdown.Item>
        <NavDropdown.Item href="#/action-7">Minutes of Meeting</NavDropdown.Item>
      
      </>
    )
  }
}

export default DocumentsDrop