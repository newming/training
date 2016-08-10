import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel.js';
import Img from '../images/slider.jpg';

class Banner extends React.Component{
  render(){
    return(
      <Carousel>
        <Carousel.Item>
          <img style={{width:'100%',height:'auto'}} alt="900x500" src={Img}/>
          {/*<Carousel.Caption> </Carousel.Caption>*/}
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width:'100%',height:'auto'}} alt="900x500" src={Img}/>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{width:'100%',height:'auto'}} alt="900x500" src={Img}/>
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Banner;
