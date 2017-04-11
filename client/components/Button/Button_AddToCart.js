import React, { Component } from 'react';

class Button_AddToCart extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        console.log("click event");
        this.props.addToCart(this.props.product);
    }
    render() {
        return (
            <button type="button" className="btn btn-default" onClick={this.onClick} >Add To Cart</button>
        )
    }
}
export default Button_AddToCart;