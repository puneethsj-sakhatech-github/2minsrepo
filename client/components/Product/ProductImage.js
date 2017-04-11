import React, { Component } from 'react';


class ProductImage extends Component {
    render() {
        return (
            <img src={this.props.image} className="img-thumbnail" alt="" />
        );
    }
}
export default ProductImage;