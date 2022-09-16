const express = require('express');
const app = express();


app.use(express.json());

 const courses =[
    {id:1 ,name:'Web development'},
    {id:2 ,name:'Android development'},
    {id:3 ,name:'Web Design'},
 ]
app.get('/api/courses',(req,res)=>{
    res.send("courses");
});

app.get('/api/courses/:id' ,(req,res) =>{
   const course =courses.find(c =>c.id === parseInt(req.params.id));
   if(!courses) res.status(404).send ('Course Does not exist')
   res.send(course);
})

app.post('/api/courses' , (req,res)=>{
  const course ={
    id:courses.length + 1 ,
    name: req.body.name
  }
  courses.push(course);
  res.json(course)
});
 const port =process.env.PORT  || 3000
 app.listen(3000 ,  () => console.log(`listening on port ${port}`));