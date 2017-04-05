import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/shop-homepage.css';
import {React_Boostrap_Carousel} from 'react-boostrap-carousel';
import '../css/bootstrap.min.css';
//import '../css/react-boostrap-carousel.css';



class Demo extends Component {
    render(){
        return(
             <div style={{height:600,margin:20}}>
          <React_Boostrap_Carousel animation={true} className="carousel-fade">
            <div style={{height:480,width:"100%",backgroundColor:"skyblue"}}>
              123
            </div>
            <div style={{height:600,width:"100%",backgroundColor:"aqua"}}>
              456
            </div>
            <div style={{height:300,width:"100%",backgroundColor:"lightpink"}}>
              789
            </div>
          </React_Boostrap_Carousel>
        </div>
        )
    }

}
export default Demo;