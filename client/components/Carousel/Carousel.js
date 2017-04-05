import React, { Component } from 'react';
import { React_Boostrap_Carousel } from 'react-boostrap-carousel';



class Carousel extends Component {
    render() {
        return (
            <div className="col-md-12">
            <div className="row carousel-holder">
                
                    {/*<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">

                            <div className="item active">
                                <img className="slide-image" src="http://enichols.com/wp-content/uploads/2015/04/grocery-header.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img className="slide-image" src="http://shoppersmark.in/wp-content/uploads/2016/01/CHENNAIS-FIRST-GROCERY-PORTAL.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img className="slide-image" src="http://www.burlpres.org/wp-content/uploads/2014/05/fruit_post.jpg" alt="" />
                            </div>
                        </div>
                        <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>*/}
                    <div style={{ height: "60%", width: "100%"}}>
                        <React_Boostrap_Carousel animation={true} className="carousel-fade">
                            <div style={{ height: "60%", width: "100%" }}>
                                <img className="slide-image" src="http://enichols.com/wp-content/uploads/2015/04/grocery-header.jpg" alt=""/>
                            </div>
                            <div style={{ height: "80%", width: "100%" }}>
                                <img className="slide-image" src="http://shoppersmark.in/wp-content/uploads/2016/01/CHENNAIS-FIRST-GROCERY-PORTAL.jpg"  alt=""/>
                            </div>
                            <div style={{ height: "60%", width: "100%"}}>
                                <img className="slide-image" src="http://www.burlpres.org/wp-content/uploads/2014/05/fruit_post.jpg" alt=""/>
                            </div>
                        </React_Boostrap_Carousel>
                    </div>
               
                </div>
                
            </div>



        );
    }
}
export default Carousel;