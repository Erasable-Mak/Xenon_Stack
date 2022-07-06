const dotenv = require('dotenv')
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:'./config.env' });
require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT || 4000;
  
//middleware express
const middleware = (req, res, next) => {
    console.log('Middleware of server');
    next();
}

app.get('/about', middleware, (re, res) => {
    res.send('Hello this is about server');
});


app.get('/signin', (re, res) => {
    res.send('Hello this is server signin page');
});

app.get('/signup', (re, res) => {
    res.send('Hello server signup page');
});


if ( process.env.NODE_ENV == "production"){

    app.use(express.static("client/build"));
}

app.listen(PORT, () => {
    console.log(`server online at port ${PORT}`);
})


