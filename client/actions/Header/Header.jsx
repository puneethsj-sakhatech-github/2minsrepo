import React, { Component } from 'react';
import '../css/bootstrap.css';
//import '../css/shop-homepage.css';

class Header extends Component {

    render() {
        return (

            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            


                        </button>
                        <a className="navbar-brand" href="#">2 Minutes...!!!</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="Groceries">Groceries</a>
                            </li>
                            <li>
                                <a href="#">Fruits</a>
                            </li>
                            <li>
                                <a href="#">Vegetables</a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>

                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>

                            <li>
                                <a href="#"></a>
                            </li><li>
                                <a href="#"></a>
                            </li><li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="#"></a>
                            </li>

                            <li>
                                <a href="#"></a>
                            </li>
                            <li>
                                <a href="http://google.com"><img src="http://www.foodytreat.com/admin/images/cart.png" style={{height:25,width:25}}alt=""/></a>
                            </li>
                            <li>
                                <a href="http://google.com">Log In/ Sign Up</a>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        );
    }





}
export default Header;