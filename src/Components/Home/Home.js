import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Footer from '../Footer/Footer';
export class Home extends Component {
  render() {
    return (
      <>
         <div className="carousel">
         <Carousel>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://images.pexels.com/photos/2356071/pexels-photo-2356071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Caption 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://images.pexels.com/photos/3312671/pexels-photo-3312671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Caption 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://images.pexels.com/photos/3064258/pexels-photo-3064258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Caption 3</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         </div>


         <div className="container">
          <div className="row">
            <div className="col-sm text-center">
              <div className="display-4 ">Some Marquee Text</div>
              <hr class="my-4"></hr>

              <marquee width="60%" direction="up" height="200px">
<ul>
  <li>Lorem ipsum dolor  </li>
  <li>Lorem ipsum dolor </li>
  <li>Lorem ipsum dolor </li>
</ul>
</marquee>
            
            </div>
            <div className="col-sm ">
              <div className="display-4 text-center">Some Relevant text</div>
              <hr class="my-4"></hr>
              <ul className='text-left'>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque odio accusamus sequi velit, hic repudiandae error quam quis libero amet. Eligendi aliquid est beatae mollitia fugiat quia soluta quos quis.</li>

                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quas ipsam doloremque et itaque quaerat accusamus quos fuga adipisci, obcaecati vel eius quasi rerum explicabo laudantium soluta natus? Ea, quos.</li>

                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta quae est delectus quisquam recusandae neque nihil cumque illum illo odit, aut fuga, eos quas molestias reiciendis aperiam pariatur. Natus?</li>
              </ul>
            </div>
            <hr className="my-4" />
          </div>

          <div className="row">
            <div className="col">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio impedit inventore repellat, corrupti rem quaerat. Recusandae, aliquid labore dolorum dignissimos sed architecto. Cumque hic dolore expedita deserunt sequi et accusantium ratione vel possimus similique fuga, recusandae, quaerat aut dignissimos repudiandae nihil nemo eius vero quae delectus perferendis, perspiciatis voluptatem cum. Repudiandae, porro facere. Possimus praesentium iste eaque unde nulla nesciunt omnis molestias. Suscipit quae temporibus doloremque, aperiam dolores sint inventore perspiciatis nisi fugit nulla corporis nemo nesciunt, cum porro? Commodi ullam dolorum ex rerum inventore velit voluptatum in praesentium recusandae error, provident exercitationem, eius facilis ut, eligendi distinctio debitis. Quas.</div>

          </div>
          <div className="row ">
            <div className="col d-flex justify-content-around">
              <div className="btn btn-secondary">Link 1</div>
              <div className="btn btn-primary">Link 2</div>
              <div className="btn btn-danger">Link 3</div>
              <div className="btn btn-success">Link 4</div>
            </div>
          </div>
         </div>

         <Footer/>
      </>
    )
  }
}

export default Home