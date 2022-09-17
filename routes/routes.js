const express = require('express');

const router = express.Router();

const { Courses } = require('../services/services')

router.get('/api/courses', Courses.findAllCourses);


router.get('/api/courses/:id', Courses.findCourseByid);

// HTTP POST REQUEST
router.post('/api/courses', Courses.postCourse);
router.put('/api/courses/:id', Courses.putCourse );

router.delete('/api/courses/:id',Courses.deleteCourse) 
module.exports = router