import React, { Component } from 'react';


class ProductName extends Component {

    render() {
        return (
            <div>
                
                <h4><a href="#">{this.props.name}</a>
                </h4>
            </div>
        )
    }
}
export default ProductName;