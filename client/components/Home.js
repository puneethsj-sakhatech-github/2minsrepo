import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import Carousel from './Carousel/Carousel';
import ProductComponent from './Product/ProductComponent';

let proList = [];

export default class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillMount() {
    if (!localStorage.getItem('cartItems')) {
      console.log(!localStorage.getItem('cartItems'));
      let cartItems = [];
      localStorage.setItem('cartItems', cartItems);
    }


    proList = [
      { Product_Name: '1', url: 'https://wallpaperscraft.com/image/squirrel_animal_look_85148_320x240.jpg', cost: 120.00 },
      { Product_Name: '2', url: 'https://i2.wallpaperscraft.com/image/cat_lying_cool_cat_beautiful_cat_93539_300x225.jpg', cost: 239.00 },
      { Product_Name: '3', url: 'https://wallpaperscraft.com/image/squirrel_snow_tree_climbing_animal_72189_320x240.jpg', cost: 347.00 },
      { Product_Name: '4', url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8uZwtSyRd9Qps48wnjZ_JDwfIf4yBKsIXFGh6vgg7buiCZvtR', cost: 455.99 },
      { Product_Name: '5', url: 'https://wallpaperscraft.com/image/prairie_dog_animal_sand_clay_habitat_26575_320x240.jpg', cost: 523.79 },
    ];
  }


  render() {
    const prods = proList.map(
      // const prods = this.props.proList.map(
      (p) => <ProductComponent product={p} key={p.Product_Name} />

    );


    return (
      <div>
        <Carousel />
        {prods}
      </div>

    );
  }
}
