import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './Product/ProductComponent';

let vegetablesList = [];

export default class Vegetables extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        vegetablesList = [
            { Product_Name: 'Carrots', url: 'http://www.kulsons.com/wp-content/uploads/2016/11/kulsons-vegetables-farming-export-carrot-320x240.jpg', cost: 60.00 },
            { Product_Name: 'Spinach', url: 'http://lovelace-media.imgix.net/uploads/615/b916de00-3fbb-0133-0a2f-0e76e5725d9d.jpg?w=320', cost: 239.00 },
            { Product_Name: 'Tomato', url: 'https://i1.wallpaperscraft.com/image/tomato_vegetable_ripe_111327_300x225.jpg', cost: 347.00 },
            { Product_Name: 'Pea', url: ' http://8-themes.com/wp-content/uploads/2016/01/c6915d8c3f3fdd874af54100900b2e8b-320x240.jpg', cost: 40.00 },
            { Product_Name: 'Potato', url: 'http://nopoco.ca/images/norfolk-potato-fresh-premium-potatoes.jpg', cost: 455.99 },
            { Product_Name: 'Cucumber', url: ' http://www.mrkev.com/media/images/okurka.2e16d0ba.fill-320x240.jpg', cost: 30.00 },
            { Product_Name: 'Onion', url: 'http://www.mrkev.com/media/images/cibule.2e16d0ba.fill-320x240.jpg', cost: 523.79 },
            { Product_Name: 'Broccoli', url: ' http://urbanhealth.com.my/wp-content/uploads/2015/10/broccoli-320x240.jpg', cost: 120.00 },
            { Product_Name: 'Raddish', url: 'https://c1.staticflickr.com/4/3742/11146646036_bbcd2b21de_n.jpg', cost: 30.00 },
            { Product_Name: 'Cabbage', url: ' https://t4.ftcdn.net/jpg/00/01/70/17/240_F_1701787_BwkMbhJ3MRBQAPeOdkL5gHXH9cZxQA.jpg', cost: 50.00 },
            { Product_Name: 'Cucumber1', url: ' http://www.mrkev.com/media/images/okurka.2e16d0ba.fill-320x240.jpg', cost: 30.00 },
            { Product_Name: 'Capcium', url: ' https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Starr_070730-7876_Capsicum_annuum.jpg/320px-Starr_070730-7876_Capsicum_annuum.jpg', cost: 30.00 },
            { Product_Name: 'Beans', url: 'http://www.getting-started-with-healthy-eating.com/images/S30A0295-string-beans-320x240.jpg', cost: 60.00 },

        ]
    }


    render() {

        const prods = vegetablesList.map(

            (p) => <ProductComponent product={p} key={p.Product_Name} />


        );

        return (
            <div className="Fruits">
                {prods}
                <h3>Vegetables</h3>
            </div>
        );
    }
}
