import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './Product/ProductComponent';
import { vegetablesListRequest } from '../actions/authActions';

let vegetablesList = [];

export default class Vegetables extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        vegetablesListRequest();
    }

    componentWillMount() {
        vegetablesListRequest();

    }

    


    render() {
        vegetablesList = JSON.parse(sessionStorage.getItem('vegetablesList'));
        const prods = vegetablesList.map(

            (p) => <ProductComponent product={p} key={p.product_Name} />


        );

        return (
            <div className="Fruits">
                {prods}
                <h3>Vegetables</h3>
            </div>
        );
    }
}
