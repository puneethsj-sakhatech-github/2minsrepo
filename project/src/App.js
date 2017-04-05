import React, { Component } from 'react';
import Header from './Header/Header';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import Product from './Product/Product';

class App extends Component {

 proList = [
    { Product_Name: 'First', url: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-800x480-3929-870f417.jpg', cost: 120},
    { Product_Name: 'Second', url: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-800x480-3929-870f417.jpg', cost: 239},
    { Product_Name: 'Third', url: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-800x480-3929-870f417.jpg', cost: 347},
    { Product_Name: 'Fourth', url: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-800x480-3929-870f417.jpg', cost: 455},
    { iProduct_Named: 'Fifth', url: 'http://naturewallpaperfree.com/fruits-vegetables/nature-wallpaper-800x480-3929-870f417.jpg',cost: 523},
  ];
  


  render() {

    const prods = this.proList.map(
      (p) => <Product product={p} key={p.Product_Name}/>
    );

    return (
      /*<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/

      <div className="wrapper">
        <Header />
        <div className="insert">
          <Carousel />
          <Product/>
          <Product/>
          {prods}
          <Product/>
          <Product/>
        </div>
        <Footer />
      </div>





    );
  }
}

export default App;
