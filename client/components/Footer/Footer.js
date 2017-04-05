import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
        return (
            
                <footer>
                    <div className="row">
                        <div className="col-lg-12">
                            <hr style={{ height: 1, width: "75%", background: "black"}} />

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
            
        )
    }
}