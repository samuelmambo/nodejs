const Joi = require('joi');
const express = require('express');
const Authenticating = require('./logger');
const app = express();
const mysql = require('mysql');
const bodyparser = require('body-parser')
app.use(bodyparser.json());

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'mambo',
});

const logger = require('./logger');
const coursesRouter = require('./routers/routers')

console.log(` NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:  ${app.get('env')}`)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', coursesRouter)
app.use(express.urlencoded({ extended: true }))




const port = process.env.PORT || 3009
app.listen(port, () => console.log(`Listening on port ${port}....`));
