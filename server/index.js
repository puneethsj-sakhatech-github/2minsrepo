import express from 'express';
//import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';
import request from 'request';
import timeout from 'connect-timeout';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import session from 'express-session';
import { jwtSecret } from './config';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();
const compiler = webpack(webpackConfig);
let tempdata = {};
let backend = 'http://192.168.3.14:8080';

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));


app.use(session({
  secret: 'w)iw#%2^-qwzxqy^ww7*6yc3qum9_99a6o6!wxm997vr142w=y',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 * 24 * 30 }
}));

//app.use(bodyParser.text());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/2minapi/*', timeout('30s'), (req, res) => {
  console.log("Sendig Request");
  if (req.timedout) return next(createError(503, 'Response timeout'));
  var url = backend + req.url;
  //Add any additional headers like token, API key etc here
  req.headers['content-type'] = 'application/json';
  console.log("Sendig Response");
  req.pipe(request(url).on('error', function (err) {
    console.log("error " + err);
  })).pipe(res);
});

app.put('/2minapi/*', timeout('30s'), (req, res) => {
  if (req.timedout) return next(createError(503, 'Response timeout'));
  var url = backend + req.url;
  //Add any additional headers like token, API key etc here
  //req.headers['key'] = 'value';
  req.headers['content-type'] = 'application/json';
  req.pipe(request(url).on('error', function (err) {
    console.log("error " + err);
  })).pipe(res);
});

app.post('/2minapi/*', timeout('30s'), (req, res) => {
  if (req.timedout) return next(createError(503, 'Response timeout'));
  var url = backend + req.url;
  console.log("Request url is ", url);
  req.headers['content-type'] = 'application/json';
  //Add any additional headers like token, API key etc here
  //req.headers['key'] = 'value';

  if (req.session.user_id) {
    //Logged in user token header to be set here , like so
    //req.headers['X-token'] = req.session.xtoken;
  }

  if (req.url.indexOf('user/login') != -1) {
    req.pipe(request(url, function (error, response, body) {
      console.log("Login response ", response);
      let jsonResponse = JSON.parse(response.body);
      if (jsonResponse.error === false) {
        let token = '';
        if (jsonResponse.response.token) {
          token = jsonResponse.response.token;
        }
        const jwtToken = jwt.sign({
            user_details:
            {
              user_id: jsonResponse.response.user_id,
              username: jsonResponse.response.username,
              email: jsonResponse.response.email,
            },
        }, jwtSecret);

        jsonResponse.response = {};
        
        jsonResponse.response.token = jwtToken;
        console.log("step-2");
        req.session.user_id = jsonResponse.user_id;
      }
      res.json(jsonResponse);
      res.send();

      //console.log('response ' , jsonresp.error);
    }));
  }

/*For User Registration*/

  if (req.url.indexOf('user/register/') != -1) {
    req.pipe(request(url, function (error, response, body) {
      console.log("Register Response response ", response);
      let jsonResponse = JSON.parse(response.body);
      if (jsonResponse.error === false) {
        let token = '';
        if (jsonResponse.response.token) {
          token = jsonResponse.response.token;
        }
        const jwtToken = jwt.sign({
            user_details:
            {
              user_id: jsonResponse.response.user_id,
              username: jsonResponse.response.username,
              email: jsonResponse.response.email,
            },
        }, jwtSecret);

        jsonResponse.response = {};
        
        jsonResponse.response.token = jwtToken;
        console.log("step-2");
        req.session.user_id = jsonResponse.user_id;
      }
      res.json(jsonResponse);
      res.send();

      //console.log('response ' , jsonresp.error);
    }));
  }

/*for fetching products*/

   if (req.url.indexOf('products/') != -1) {
    req.pipe(request(url, function (error, response, body) {
      console.log("Register Response response ", response);
      let jsonResponse = JSON.parse(response.body);
      if (jsonResponse.error === false) {
        let token = '';
        if (jsonResponse.response.token) {
          token = jsonResponse.response.token;
        }
        const jwtToken = jwt.sign({
            user_details:
            {
              user_id: jsonResponse.response.user_id,
              username: jsonResponse.response.username,
              email: jsonResponse.response.email,
            },
        }, jwtSecret);

        jsonResponse.response = {};
        
        jsonResponse.response.token = jwtToken;
        console.log("step-2");
        req.session.user_id = jsonResponse.user_id;
      }
      res.json(jsonResponse);
      res.send();

      //console.log('response ' , jsonresp.error);
    }));
  }

  else {
    req.pipe(request(url).on('error', function (err) {
      console.log("error " + err);
    })).pipe(res);
  }
});

var errorFilter = (err, req, res, next) => {
  if (!res.headersSent) {
    let errcode = err.status || 500;
    let msg = err.message || 'server error!';
    let errResJSON = {};
    errResJSON.msg = msg;
    console.log("error is ", msg);
    res.status(errcode).send(errResJSON);
  }
};

app.use(errorFilter);

app.use('/assets', express.static(__dirname + '/assets'));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});



app.listen(3333, () => console.log('Running on host'));
