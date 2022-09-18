const courses = [
    { id: 1, name: 'course 1', duration: '2yrs' },
    { id: 2, name: 'course 2', duration: '2yrs' },
    { id: 3, name: 'course 3', duration: '2yrs' },
    { id: 4, name: 'course 4', duration: '2yrs' },
    { id: 5, name: 'course 5', duration: '2yrs' },

];


class Courses {
    static findAllCourses(req, res) {
        res.send(courses);
    }


    static findCourseByid(req, res) {
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if (!course) {
            console.log('course not found')
            res.status(404).send('The course ID was not found')
        } else {
            res.send(course);
        }
    }
    static postCourse(req, res) {

        const course = {
            id: courses.length + 1,
            name: req.body.name
        }
        courses.push(course);
        res.json(course);
    }
    static putCourse(req, res) {
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if (!course) res.status(404).send('The course ID was not found')
        course.name = req.body.name;
        res.send(course);
    }
    static deleteCourse(req, res) {
        const course = courses.find(c => c.id === parseInt(req.params.id));
        if (!course) res.status(404).send('The course ID was not found');

        const index = courses.indexOf(course);
        courses.splice(index, 1);
        res.send(course);
    }

}
module.exports = { Courses }