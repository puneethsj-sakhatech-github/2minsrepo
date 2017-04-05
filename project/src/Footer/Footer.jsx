import React, { Component } from 'react';
//import '../css/bootstrap.css';
//import '../css/shop-homepage.css';
import '../css/bootstrap.min.css';
class Footer extends Component{

    render(){
        return(
             <div className="container">

        

       {/* <!-- Footer -->*/}
            <footer>
                
            <div className="row">
                <div className="col-lg-12">
                    <hr style={{height:1, width:"75%" ,background:808080  }}/>
                    
                    <ul className="nav navbar-nav">
                            
                            <li>
                                <a href="#">Copyright &copy; 2 Minutes...!!!&trade; 2017</a>
                            </li>
                            <li>
                                <a href="">Groceries</a>
                            </li>
                            <li>
                                <a href="#">Fruits</a>
                            </li>
                            <li>
                                <a href="#">Vegetables</a>
                            </li>
                            </ul>
                </div>
            </div>
        </footer>
        </div>
        )
    }

}
export default Footer;