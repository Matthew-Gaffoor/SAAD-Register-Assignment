const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const schema = mongoose.schema

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, //means name is required
        trim: true, //trims off the spaces left in a string if any
        unique: true
    }
})
courseSchema.plugin(uniqueValidator);

const Course = mongoose.model('Course' , courseSchema)

const course1 = new Course({ name: 'Software Architecture and Design'})

course1.save(function (err, courses) {
    if (err) return console.error(err);
    console.log(courses.name + " saved to Courses collection.");
  });

module.exports = Course