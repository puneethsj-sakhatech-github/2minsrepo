import React,{Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import Carousel from './Carousel/Carousel';



export default class Home extends Component {
   

    constructor(props) {
      super(props);
    }

    
    
   
    render() {
      
      // const prods = this.props.proList.map(
      // (p) => <ProductComponent product={p} key={p.Product_Name} />
      
      //     );
    

        return (          
                  <Carousel/>            
        );
    }
}
 