import React, { Component } from 'react'
import {Link} from "react-router-dom"
import Footer from "../Footer/Footer"
export class More extends Component {
  render() {
    return (
      <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm">
          <div class="list-group">
  <Link href="#" class="list-group-item list-group-item-action ">
   Sustainable Development Goals (SDGs)
  </Link>
  <Link href="#" class="list-group-item list-group-item-action">Budget</Link>
  <Link href="#" class="list-group-item list-group-item-action">Tender</Link>
  <Link href="#" class="list-group-item list-group-item-action">Recruitment</Link>
  <Link to="/events" class="list-group-item list-group-item-action">Events</Link>
  <Link href="#" class="list-group-item list-group-item-action">Games Result</Link>
  <Link href="#" class="list-group-item list-group-item-action">Media Gallery</Link>
  <Link href="#" class="list-group-item list-group-item-action">Grievances Redressal</Link>
  <Link href="#" class="list-group-item list-group-item-action">Feedback</Link>
</div>


          </div>
          <div className="col-sm">
          <img src="https://images.pexels.com/photos/10866644/pexels-photo-10866644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." class="img-thumbnail"/>
          </div>
        </div>
      </div>

      <Footer/>
      </>
    )
  }
}

export default More