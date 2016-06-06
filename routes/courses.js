var express = require('express');
var router = express.Router();

var Course = require('../models/course');

function seedCourses() {
var courses = [
  { name: 'Love & Money',
    photo: 'https://s3.amazonaws.com/thinkific/courses/course_card_image_000/015/3291461626687.original.png',
    description: 'Everything You Need to Know About Managing Money While Dating & Making Financial Decisions As A Couple',
    tagline:'Your romantic decision is one of the biggest financial decisions you will make in your entire life.',
    teacher_name: 'Sydney Smith',
    teacher_photo:'https://s3.amazonaws.com/thinkific/instructors/000/005/8661452319381.small.jpg?1452319381',
    price: '$55.99' }
]

 Course.find({}).remove()
 .then(function() {
   return Course.create(courses);
 })
 .then(function() {
   return Course.find({});
 })
 .then(function(found) {
   console.log('We saved and retrieved', found.length, 'courses.');
 });
}

seedCourses();

// INDEX Route
router.get('/', function(req, res, next) {
    Course.find({})
        .then(function(courses) {
            res.json(courses);
        });
});

// SHOW Route
router.get('/:id', function(req, res, next) {
  Course.findById(req.params.id)
  .then(function(course) {
    if (!course) {
      res.status(404).json( { error: 'Not found' } );
    }
    res.json(course);
  })
  .catch(function(err) {
    return next(err);
  });
});

module.exports = router;
