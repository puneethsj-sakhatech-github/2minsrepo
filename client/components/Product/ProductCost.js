import React, { Component } from 'react';



class ProductCost extends Component {

    render() {
        return (
            <div>
                
                <h4 className="pull-right">₹ {this.props.cost}</h4>
        
            </div>
        )
    }
}
export default ProductCost;