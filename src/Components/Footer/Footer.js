import React, { Component } from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
export class Footer extends Component {
  render() {
    return (
      <>
       <div className="footer"> <div className="footer-body">
            
            <Nav.Link as = {Link} className="grid-item">Site Map</Nav.Link>
            <Nav.Link as = {Link} className="grid-item">Contact Us</Nav.Link>
            <Nav.Link as = {Link} className="grid-item">Feedback</Nav.Link>
            <Nav.Link as = {Link} className="grid-item">Disclaimer</Nav.Link>
            <Nav.Link as = {Link} className="grid-item">Website Governance</Nav.Link>
            <Nav.Link as = {Link} className="grid-item">Website Information Manager</Nav.Link>
            <br />
            <br />
            
          
        </div>

        <div className="footer">
        <div className="container d-flex justify-content-center">
            <div className="row">
              <div className="col"> <div className="text-center">&copy;2022 Directorate of Sports and Youth Welfare, BTC (Assam). All Rights Reserved </div></div>
            </div>
           </div>
        </div>
</div>
      </>
    )
  }
}

export default Footer