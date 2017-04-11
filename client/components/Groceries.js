import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './Product/ProductComponent';
import { productListRequest } from '../actions/authActions';

let groceriesList = [];

export default class Groceries extends Component {
  constructor(props) {
    super(props);
   // this.state={groceriesList:[]}
  }

  componentWillMount() {
   
    productListRequest();
    
    //this.setState(groceriesList=productListRequest().data);
    console.log("groceriesList is " + groceriesList);
    //  groceriesList = [
    //     { Product_Name: 'Sauce', url: 'https://4.bp.blogspot.com/-1tEcsM_O9J8/WMhMJE6y1sI/AAAAAAAA_4A/A1dlXT9DCNUt4jaCb1nqXbuofjgamI_uQCLcB/s320/Homemade%2Bpizza%2Bsauce%2Bvegindiancooking%257E26.jpg', cost: 60.00 },
    //     { Product_Name: 'Oil', url: 'http://images.onlymyhealth.com/imported/images/2016/December/09_Dec_2016/arganOIL-320X240.jpg', cost: 239.00 },
    //     { Product_Name: 'Noodles', url: 'http://i44.tinypic.com/mmbn77.jpg', cost: 347.00 },
    //     { Product_Name: 'Cookies', url: 'http://www.groceryheadquarters.com/images/cache/cache_8/cache_a/cache_e/Richs2_R1-bdce8ea8.jpeg?ver=1472739399&aspectratio=1.3333333333333', cost: 455.99 },
    //     { Product_Name: 'pickles', url: 'http://www.applemarketpensacola.com/img/specialty-JAD0JVNO0S78N9VEPXFN.jpg', cost: 523.79 },
    // //   ];

  }
  componentDidMount(){
    console.log('proList='+(sessionStorage.getItem('proList')));
      //this.setState({groceriesList: JSON.parse(sessionStorage.getItem('proList'))});
     // groceriesList = JSON.parse(sessionStorage.getItem('proList'));
  }

  render() {
    groceriesList = JSON.parse(sessionStorage.getItem('proList'));
    const prods = groceriesList.map(

      (p) => <ProductComponent product={p} key={p.product_Name} />

    );

    return (
      <div className="Groceries">
        {prods}
        <h3>Groceries</h3>
      </div>
    );
  }
}
