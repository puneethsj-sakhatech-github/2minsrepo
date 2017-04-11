import React, { Component } from 'react';
import ProductImage from './ProductImage';
import ProductCost from './ProductCost';
import ProductDescription from './ProductDescription';
import ProductName from './ProductName';
import ProductQuantity from './ProductQuantity';
import Button_AddToCart from '../Button/Button_AddToCart';

export default class ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(product){
        
        let tempObj = product;
        let cartItems;
        if(!localStorage.getItem('cartItems')) {
            cartItems = [];
        }
        else {
            cartItems = JSON.parse(localStorage.getItem('cartItems'));
        }
        cartItems.push(product);
        
        localStorage.setItem('cartItems',JSON.stringify(cartItems));
    }

    render() {
        const {product} = this.props;
        
        
        
        return (
            <div className="col-sm-3 col-lg-4 col-md-3">
                <div className="thumbnail">
                    <div className="productImage">
                        <ProductImage image={product.url} />
                    </div>
                    <div className="caption">
                        <ProductCost cost={product.cost}/>
                        <ProductName name={product.Product_Name}/>
                        <ProductDescription />
                        <Button_AddToCart addToCart = {this.addToCart} product={product}/>
                        
                      
                        
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