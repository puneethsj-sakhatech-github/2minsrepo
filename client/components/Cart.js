import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './Product/ProductComponent';
import CartProducts from './CartProducts';

let cartItems = [];
let i = 1;
var total = 0;
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.onRemove = this.onRemove.bind(this);
        //this.state = {cartItems};
        
    }

    onRemove(product) {
        console.log("Clicked!   1");
        let cartItems = JSON.parse(localStorage.getItem('cartItems'));
        console.log("Clicked!   2");
        console.log(product.Product_Name);


        for (var index = 0; index < cartItems.length; index++) {
            if (cartItems[index].Product_Name == product.Product_Name) {
                cartItems.splice(product, 1);
                break;
            }
        }

        //cartItems.splice(product);

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        console.log("Clicked!   5");
    }

    componentWillMount() {
        total = 0;
        cartItems = JSON.parse(localStorage.getItem('cartItems'));
        console.log(cartItems);
        for (var index = 0; index < cartItems.length; index++) {
                total = total + cartItems[index].product_Cost;

        }
    }


    render() {

        
        const prods = cartItems.map(
            (p) => <CartProducts onRemove={this.onRemove} product={p} key={p.Product_Name} />);



        return (
            <div className="cart_Container">
                <div className="col-md-3">
                    <div className="cart_Logo">
                        <div className="cart_Image">
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="cart">
                        <h3>Cart</h3>
                        {prods}

                    </div>
                </div>
                <div className="col-md-2">
                    <div className="checkout">
                        <h4 className="pull-rigth">Total Cost: ₹ {total}</h4>
                        <p />
                        <button type="button" className="btn btn-default">Check Out</button>
                    </div>
                </div>
            </div>
        );
    }
}
