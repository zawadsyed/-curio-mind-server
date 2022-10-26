const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;
const courses = require('./data/courses.json')

app.use(cors());
app.get('/', (req, res) => {
    res.send('Express Server is running');
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id === id);
    res.send(selectedCourse);
})
app.listen(port, () => {
    console.log(`app server is running on ${port}`);
})