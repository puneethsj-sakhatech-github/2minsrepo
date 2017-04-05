import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '.././../../src/App';
import Login from '../components/Login/Login';
import Home from '../components/Home';
import Groceries from '../components/Groceries';
import requireAuth from '../utils/requireAuth';
import Groceries from '.././../../src/Groceries/Groceries';
import Product from '.././../../src/Product/Product';
import Carousel from '.././../../src/Carousel/Carousel';

export default (
  <Route path = "/" component={App}>
    <IndexRoute component={Carousel} />
    <Route path= "home" component={requireAuth(Home)} />
    <Route path= "Groceries" component={Groceries}/>
  </Route>
)
