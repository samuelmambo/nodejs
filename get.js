//HTTP GET REQUEST IN RESTFULAPIs

const Joi = require('joi');
const express = require('express');
const Authenticating = require('./logger');
const app = express();

const logger = require('./logger');
const coursesRouter =require('./routes/routes')

console.log(` NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:  ${app.get('env')}`)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 app.use('/',coursesRouter)
//  app.use(express.urlencoded({extended: true}))




const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}....`));
