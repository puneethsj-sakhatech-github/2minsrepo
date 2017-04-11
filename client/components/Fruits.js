import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductComponent from './Product/ProductComponent';

let fruitsList = [];

export default class Fruits extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

        fruitsList = [
            { Product_Name: 'Oranges', url: 'https://cdn.allwallpaper.in/wallpapers/320x240/10562/fruits-food-lemons-320x240-wallpaper.jpg', cost: 60.00 },
            { Product_Name: 'Grapes', url: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-320x240-4143-6a1c75fc.jpg', cost: 140.00 },
            { Product_Name: 'Strawberries', url: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-320x240-4150-40a5113f.jpg', cost: 200.00 },
            {
                Product_Name: 'Pineapples', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6KHR_p-Horsx4mxG69p91G4EqMGOJEICnXfcFrt1sG5xEqodHw', cost:

                    455.99
            },
            { Product_Name: 'Pears', url: 'http://www.agromdtc.com/thumbImage/thumb_20160623131628_5898_img1-jpg', cost: 523.79 },
            { Product_Name: 'Pomegranates', url: 'http://images.onlymyhealth.com/imported/images/2016/June/03_Jun_2016/pomo-320x240.jpg', cost: 523.79 },
            { Product_Name: 'Starfruit', url: 'https://qph.ec.quoracdn.net/main-qimg-02a1e88aa4864d6773f602fabdf62a2b-c', cost: 523.79 },
            { Product_Name: 'Banana', url: 'https://i0.wp.com/farm6.static.flickr.com/5581/30506802133_a0a12b7198_o.jpg?w=800', cost: 523.79 },
            { Product_Name: 'Mango', url: 'https://qph.ec.quoracdn.net/main-qimg-2ccb0c66fae3918cfe8a55493bcfd207-c', cost: 523.79 },
            { Product_Name: 'Gooseberry', url: 'https://4.imimg.com/data4/LS/GP/MY-6405/amala-fruit-500x500.jpg', cost: 523.79 },
            {
                Product_Name: 'Watermelon', url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRyWXpc2We_-MZeXZ1jK7gBvZZ7CARb_eYxSLKFN5dKvBywKEwIAg', cost: 523.79

            },
            { Product_Name: 'Kiwifruits', url: 'https://c1.staticflickr.com/3/2890/12351816734_d319ca2ac4_n.jpg', cost: 523.79 },
        ];
    }


    render() {

        const prods = fruitsList.map(

            (p) => <ProductComponent product={p} key={p.Product_Name} />


        );

        return (
            <div className="Fruits">
                {prods}
                <h3>Groceries</h3>
            </div>
        );
    }
}
