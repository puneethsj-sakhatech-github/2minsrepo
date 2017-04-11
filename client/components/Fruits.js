import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './Product/ProductComponent';
import { fruitListRequest } from '../actions/authActions';

let fruitsList = [];

export default class Fruits extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fruitListRequest();
     }

    componentWillMount() {
        //fruitListRequest();

        }


        // fruitsList = [
        //     { product_Name: 'Oranges', product_Desc: 'https://cdn.allwallpaper.in/wallpapers/320x240/10562/fruits-food-lemons-320x240-wallpaper.jpg', product_Cost: 60.00 },
        //     { product_Name: 'Grapes', product_Desc: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-320x240-4143-6a1c75fc.jpg', product_Cost: 140.00 },
        //     { product_Name: 'Strawberries', product_Desc: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-320x240-4150-40a5113f.jpg', product_Cost: 200.00 },
        //     {
        //         product_Name: 'Pineapples', product_Desc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6KHR_p-Horsx4mxG69p91G4EqMGOJEICnXfcFrt1sG5xEqodHw', product_Cost:

        //         455.99
        //     },
        //     { product_Name: 'Pears', product_Desc: 'http://www.agromdtc.com/thumbImage/thumb_20160623131628_5898_img1-jpg', product_Cost: 523.79 },
        //     { product_Name: 'Pomegranates', product_Desc: 'http://images.onlymyhealth.com/imported/images/2016/June/03_Jun_2016/pomo-320x240.jpg', product_Cost: 523.79 },
        //     { product_Name: 'Starfruit', product_Desc: 'https://qph.ec.quoracdn.net/main-qimg-02a1e88aa4864d6773f602fabdf62a2b-c', product_Cost: 523.79 },
        //     { product_Name: 'Banana', product_Desc: 'https://i0.wp.com/farm6.static.flickr.com/5581/30506802133_a0a12b7198_o.jpg?w=800', product_Cost: 523.79 },
        //     { product_Name: 'Mango', product_Desc: 'https://qph.ec.quoracdn.net/main-qimg-2ccb0c66fae3918cfe8a55493bcfd207-c', product_Cost: 523.79 },
        //     { product_Name: 'Gooseberry', product_Desc: 'https://4.imimg.com/data4/LS/GP/MY-6405/amala-fruit-500x500.jpg', product_Cost: 523.79 },
        //     {
        //         product_Name: 'Watermelon', product_Desc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyWXpc2We_-MZeXZ1jK7gBvZZ7CARb_eYxSLKFN5dKvBywKEwIAg', product_Cost: 523.79

        //     },
        //     { product_Name: 'Kiwifruits', product_Desc: 'https://c1.staticflickr.com/3/2890/12351816734_d319ca2ac4_n.jpg', product_Cost: 523.79 },
        // ];
    


    render() {
        fruitsList = JSON.parse(sessionStorage.getItem('fruitsList'));
        const prods = fruitsList.map(

            (p) => <ProductComponent product={p} key={p.product_Name} />


        );

        return (
            <div className="Fruits">
                {prods}
                <h3>Groceries</h3>
            </div>
        );
    }
}
