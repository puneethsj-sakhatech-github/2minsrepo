import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Home from '../components/Home';
import Groceries from '../components/Groceries';
import requireAuth from '../utils/requireAuth';

export default (
  <Route path = "/" component={App}>
    <IndexRoute component={Home} />
    <Route path= "groceries" component={Groceries}/>
  </Route>
)
