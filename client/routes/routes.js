import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Home from '../components/Home';
import Groceries from '../components/Groceries';
import requireAuth from '../utils/requireAuth';
import Fruits from '../components/Fruits';
import Vegetables from '../components/Vegetables';
import Cart from '../components/Cart';
import Login from '../components/Login/Login';
import Registration from '../components/Registration/Registration';
 
export default (
  <Route path = "/" component={App}>
    <IndexRoute component={Home} />
    <Route path= "groceries" component={Groceries}/>
    <Route path= "fruits" component={Fruits}/>
    <Route path= "Vegetables" component={Vegetables}/>
    <Route path= "cart" component={Cart}/>
    <Route path= "login" component={Login}/>
    <Route path= "home" component={Home}/>
    <Route path= "register" component={Registration}/>
  </Route>
)
