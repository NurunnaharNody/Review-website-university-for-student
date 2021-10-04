import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './WhyUfs.css'

const WhyUfs = () => {
    return (
        <div>
            <Header></Header>
            <br/>
            <br/>
 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-50 "
      src="https://i.ibb.co/bFYrdLn/Untitled-design-14.png"
      alt="First slide"
    />
    <Carousel.Caption className="w-title">
      <h3 >Milly S</h3>
      <h4 >Business Administration</h4>
      <p>I Have already gotten two course.Take Love.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://i.ibb.co/3S71vw1/Untitled-design-15.png"
      alt="Second slide"
    />

    <Carousel.Caption className="w-title" >
      <h3>Mihiran su</h3>
      <h4>Computer science</h4>
      <p>It's a great University. <br/>
        Take ur decission and make it Enjoyable.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50"
      src="https://i.ibb.co/mt0gGHW/Untitled-design-16.png"
      alt="Third slide"
    />

    <Carousel.Caption className="w-title">
      <h3>Tanzeen N</h3>
      <h4>Bechelor of arts</h4>
      <p>Love This Campus.<br/>
        Done my one year internship.</p>
       </Carousel.Caption>
       </Carousel.Item>
        </Carousel>
        <br/>
        <br/>
         <Footer></Footer>
        </div>
    );
};

export default WhyUfs;