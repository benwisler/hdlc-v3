import React, { Component } from "react";
import Search from "../Search";
import DemoCarousel from "../Carousel";
import Logo from "../Logo";
import {Container} from 'reactstrap';
  
class Home extends Component {


// if (loggedIn) {
  render() {
    
    return (
      <Container className="text-center">
      <style>
        {
          `.mycss {
            text-shadow:2px 3px 4px rgba(117,117,117,0.8);font-weight:normal;font-style:italic;color:#5F2073;letter-spacing:-1pt;word-spacing:-2pt;font-size:49px;text-align:center;font-family:times new roman, times, serif;line-height:1;
          
          }`
        }
      </style>
      <p className="mycss">Honey Do List Contractors, LLC</p>
          <DemoCarousel/>
      </Container>
    );
  }
// }
}

export default Home;
