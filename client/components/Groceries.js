import React,{Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

export default class Groceries extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <div>
              <div className="row">
                <div className="col-xs-12">
                  <h1>Groceries!</h1>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h3>Groceries!!!!</h3>
                </div>
              </div>
            </div>
        );
    }
}
