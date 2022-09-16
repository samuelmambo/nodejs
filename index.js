//HTTP GET REQUESTS OM RESTFULAPI`S

const express = require('express');
const app = express();


app.use(express.json())


const courses = [
    { id: 2, name: 'course 2' },
    { id: 3, name: 'Android' },
    { id: 4, name: 'Data Analysit' },
];


app.get('/', (req, res) => {
    res.send('Hello sam')
})
app.get('/api/courses', (req, res) => {
    res.send(courses);
});
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('This course Id does not exist');
    res.send(course);

});


app.post('/api/courses',(req,res)=>{
    console.log(req.body)
 const course={
    id: courses.length + 1,
    name : req.body.name
 };
 courses.push(course);
  res.json(course)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}..`));

