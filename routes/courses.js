var express = require('express');
var router = express.Router();

var Course = require('../models/course');

function seedCourses() {
var courses = [
  { name: 'Love & Money',
    photo: 'img/loveandmoney.jpg',
    description: 'In this 8-week course, you will learn how to be money smart by not allowing your heart to rule. Get ready to learn more, heal past love and money hurts, and grow as you establish a wealthy love foundation in your life for all of your loved ones—romantic partners, friends and family.',
    tagline:'Everything You Need to Know About Managing Money While Dating & Making Financial Decisions As A Couple.',
    teacher_name: 'Sydney Smith',
    teacher_photo:'https://s3.amazonaws.com/thinkific/instructors/000/005/8661452319381.small.jpg?1452319381',
    price: '$50' },
  { name: 'Debt 101',
    photo: 'img/debt-101.jpg',
    description: 'Everything You Need to Know About Managing Money While Dating & Making Financial Decisions As A Couple',
    tagline:'Your romantic decision is one of the biggest financial decisions you will make in your entire life.',
    teacher_name: 'Sydney Smith',
    teacher_photo:'https://s3.amazonaws.com/thinkific/instructors/000/005/8661452319381.small.jpg?1452319381',
    price: '$55.99' },
  { name: 'Negotiating Your Salary',
    photo: 'img/salary-negotiation.jpg',
    description: 'Everything You Need to Know About Managing Money While Dating & Making Financial Decisions As A Couple',
    tagline:'Your romantic decision is one of the biggest financial decisions you will make in your entire life.',
    teacher_name: 'Sydney Smith',
    teacher_photo:'https://s3.amazonaws.com/thinkific/instructors/000/005/8661452319381.small.jpg?1452319381',
    price: '$55.99' },
  { name: 'Real Estate Investing',
    photo: 'img/real-estate.jpg',
    description: 'Everything You Need to Know About Managing Money While Dating & Making Financial Decisions As A Couple',
    tagline:'Your romantic decision is one of the biggest financial decisions you will make in your entire life.',
    teacher_name: 'Sydney Smith',
    teacher_photo:'https://s3.amazonaws.com/thinkific/instructors/000/005/8661452319381.small.jpg?1452319381',
    price: '$55.99' },
  { name: 'Couponing 101',
    photo: 'img/couponing.png',
    description: 'Everything You Need to Know About Managing Money While Dating & Making Financial Decisions As A Couple',
    tagline:'Your romantic decision is one of the biggest financial decisions you will make in your entire life.',
    teacher_name: 'Sydney Smith',
    teacher_photo:'https://s3.amazonaws.com/thinkific/instructors/000/005/8661452319381.small.jpg?1452319381',
    price: '$55.99' },
  { name: 'Saving for the Future',
    photo: 'img/saving.jpg',
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
