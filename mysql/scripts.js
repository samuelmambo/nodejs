
const express = require("express");
const mysql = require('mysql')
app.use = express();

const connection = mysql.createConnetion({
    // properties
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mambo',
});

connection.connect = ((error) => {
    if (!!error) {
        console.log('Error');
    } else {
        console.log('Connection sucessfull');
    }
});


app.listen(3000)