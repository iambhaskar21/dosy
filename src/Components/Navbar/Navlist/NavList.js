import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import AboutUsDrop from './AboutUsDrop/AboutUsDrop';
import DocumentsDrop from './DocumentsDrop/DocumentsDrop';
import InformationServices from './InformationServicesDrop/InformationServices';
export class NavList extends Component {
  render() {
    return (
     <>
         <div className="nav-item">Home</div>
                <div className="nav-item"><InformationServices/></div>
                <div className="nav-item"><DocumentsDrop/></div>
                <div className="nav-item"><AboutUsDrop/></div>
                <div className="nav-item">More</div>

                
     </>
    )
  }
}

export default NavList