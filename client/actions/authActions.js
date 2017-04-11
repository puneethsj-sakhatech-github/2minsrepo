import axios from 'axios';
import jwt from 'jsonwebtoken';

import { SET_CURRENT_USER } from './typeConstants';
import {setAuthToken} from '../utils/setAuthToken';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function userRegistrationRequest(authData){

}

export function userLoginRequest(authData) {
  return dispatch => {
    //uncomment the below line once the API is ready
    let data = JSON.stringify(authData);
    return axios.post('2minapi/user/login',data).then(res => {
      console.log("auth login " , res);
      if(res.data.response) {
        const jwtToken = res.data.response.token;
        if(jwtToken) {
          localStorage.setItem('jwtToken',jwtToken);
          console.log("Added to local storage")
          const decodedToken = jwt.decode(jwtToken);
          const user = decodedToken.user_details;
          const token = decodedToken.token;
          if(user.is_mobile_verified) {
            setAuthToken(user.token);
            dispatch(setCurrentUser(user));
          }
        }
      }
      return res;
    });
  }
}

export function logout(userid) {
  return dispatch => {
    let data = 'data='+JSON.stringify(userid);
    return axios.post('/api/user/logout',data).then(res => {
      localStorage.removeItem('jwtToken');
      setAuthToken(false);
      dispatch(setCurrentUser({}));
    });
  }
}


export function productListRequest() {
  console.log("hit");
  let data = {};
  console.log('2minapi/product/1');
  return axios.get('2minapi/product/1',data).then(res => {
    
    console.log("product list response " , res.data);
    console.log(" My list " , res);
    sessionStorage.setItem('proList', JSON.stringify(res.data));
    return res.data;
  });
}


export function fruitListRequest() {
  console.log("hit");
  let data = {};
  console.log('2minapi/product/2');
  return axios.get('2minapi/product/2',data).then(res => {
    
    // console.log("product list response " , res.data);
    // console.log(" My list " , res);
    sessionStorage.setItem('fruitsList', JSON.stringify(res.data));
    return res.data;
  });
}

export function vegetablesListRequest() {
  console.log("hit");
  let data = {};
  console.log('2minapi/product/3');
  return axios.get('2minapi/product/3',data).then(res => {
    
    // console.log("product list response " , res.data);
    // console.log(" My list " , res);
    sessionStorage.setItem('vegetablesList', JSON.stringify(res.data));
    return res.data;
  });
}





export function userRegisterRequest(authData) {
  return dispatch => {
    //uncomment the below line once the API is ready
    let data = JSON.stringify(authData);
    return axios.post('2minapi/user/register',data).then(res => {
      console.log("auth login " , res);
      if(res.data.response) {
        const jwtToken = res.data.response.token;
        if(jwtToken) {
          localStorage.setItem('jwtToken',jwtToken);
          console.log("Added to local storage")
          const decodedToken = jwt.decode(jwtToken);
          const user = decodedToken.user_details;
          const token = decodedToken.token;
          if(user.is_mobile_verified) {
            setAuthToken(user.token);
            dispatch(setCurrentUser(user));
          }
        }
      }
      return res;
    });
  }
}
