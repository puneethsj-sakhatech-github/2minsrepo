import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import '../css/shop-homepage.css';

class Product extends Component{

    render(){
        return(
            
            <div className="col-sm-3 col-lg-4 col-md-3">
                        <div className="thumbnail">
                            <img src="http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-800x480-3929-870f417.jpg" alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">$24.99</h4>
                                {/*<h4 className="pull-right">{this.props.product.cost}</h4>*/}
                                <h4><a href="#">Product_Name</a>
                                </h4>
                                <p>Add Your product description here</p>
                                <button type="button" className="btn btn-default" >Add To Cart</button>
                                <input type="number" className="Quantity" placeholder="Quantity"/>
                            </div>
                            <div className="ratings">
                                <p className="pull-right">15 reviews</p>
                                <p>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                    <span className="glyphicon glyphicon-star"></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
        )
    }


}

export default Product;