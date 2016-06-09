var express = require('express');
var router = express.Router();

var Course = require('../models/course');
var CartCourse = require('../models/cart-course')

function seedCartCourses() {
var cartCourses = [

]

 cartCourse.find({}).remove()
 .then(function() {
   return CartCourse.create(cartCourses);
 })
 .then(function() {
   return CartCourse.find({});
 })
 .then(function(found) {
   console.log('We saved and retrieved', found.length, 'courses in your cart.');
 });
}

seedCartCourses();

// INDEX Route
router.get('/', function(req, res, next) {
    CartCourse.find({})
        .then(function(courses) {
            res.json(courses);
        });
});

// SHOW Route
router.get('/:id', function(req, res, next) {
  CartCourse.findById(req.params.id)
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
