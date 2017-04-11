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
                                    <a href="">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Feedback</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
            
        )
    }
}