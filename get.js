//HTTP GET REQUEST IN RESTFULAPIs

const Joi = require('joi');
const express = require('express');
const Authenticating = require('./logger');
const app = express();

const logger = require('./logger');

console.log(` NODE_ENV:${process.env.NODE_ENV}`);
console.log(`app:  ${app.get('env')}`)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(Authenticating)

app.use(logger);
//  app.use(express.urlencoded({extended: true}))
const courses = [
  { id: 2, name: 'course 2' },
  { id: 3, name: 'course 3' },
  { id: 4, name: 'course 4' },
  { id: 5, name: 'course 5' },

];

app.get('/api/courses', (req, res) => {
  res.send('courses');
});



// HTTP POST REQUEST
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!courses) res.status(404).send('The course ID was not found')
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  // const schema = {
  //   name: Joi.string().min(3).required()
  // };
  // const result = Joi.Validate(req.body, schema);

  // if (result.error) {
  //   res.status(400).send(result.error.details[0].message)
  //   return;
  // }
  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course)
  res.json(course)
})
app.put('/api/courses/:id', (req, res) => {
  // look up the course
  const course = courses.find(c => c.id === parseInt(req.params.id));
  // if not existing ,return 400 (bad error)
  if (!courses) res.status(404).send('The course ID was not found')
  //validate
  //if invalid  return400
  // const schema = {
  //   name: Joi.string().min(3).required()
  // };
  // const result = Joi.Validate(req.body, schema);
  // if (result.error) {
  //   res.status(400).send(result.error.details[0].message)
  //   return;
  // }

  // update course
  course.name =req.body.name;
  //Return the updated course
  res.send(course);
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}....`));
