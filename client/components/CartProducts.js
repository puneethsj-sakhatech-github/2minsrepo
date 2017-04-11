import React, { Component } from 'react';
import ProductQuantity from './Product/ProductQuantity';

export default class CartProducts extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
       //this.onClick = this.onRemove.bind(this);
      // removeFromCart = this.onClick.bind(this);
    }

//  removeFromCart(product){
        
//    //     let cartItems = JSON.parse(localStorage.getItem('cartItems'));
//     //     const prods = cartItems.map(
     
// //     //   (p) => {if(p.Product_Name==product.Product_Name)0 }
//     //   for (var index = 0; index < cartItems.length; index++) {
//     //       if(p.Product_Name==product.Product_Name){
//     //           cartItems.splice(index,1);
//     //           break;
//     //       }          
//     //   }
//     //   let n = cartItems.indexOf(this.product.Product_Name);
//     //   cartItems.splice(n,1);
//     //   localStorage.setItem('cartItems',JSON.stringify(cartItems));
   
//         // let tempObj = product;
//         // let cartItems;
//         // if(!localStorage.getItem('cartItems')) {
//         //     cartItems = [];
//         // }
//         // else {
//         //     cartItems = JSON.parse(localStorage.getItem('cartItems'));
//         // }
//         // cartItems.push(product);
        
//         // localStorage.setItem('cartItems',JSON.stringify(cartItems));
//         console.log("Hiiiiiiiiiiiiiiiiiiiii");
//     }
    onClick(product) {
        console.log("click event");
        this.props.onRemove(this.props.product);
    }

    render() {

        return (
            <div className="CartProducts">
                <div className="col-sm-4 col-lg-4 col-md-4">
                    <img src={this.props.product.product_Desc} alt="" />
                </div>
                <div className="col-sm-8 col-lg-8 col-md-8">
                    <div>
                        <div className="caption1">

                            <div className='col-sm-4 col-lg-4 col-md-4'>
                                <h4 className="pull-left">{this.props.product.product_Name}</h4>
                            </div>
                            <div className='col-sm-4 col-lg-4 col-md-4'>
                                <h4 >{this.props.product.product_Cost}</h4>
                            </div>
                            <div className='col-sm-2 col-lg-2 col-md-2'>
                            </div>
                        </div>
                        <div className='col-sm-4 col-lg-4 col-md-4'>
                            <button type="button" className="btn btn-default" onClick={this.onClick}>Remove</button>
                        </div>
                        <div className='col-sm-4 col-lg-4 col-md-4'>
                            <ProductQuantity/>
                        </div>
                    </div>
                </div>
                <hr style={{ height: 1, width: "75%", background: "black" }} />
            </div>

        );
    }
}