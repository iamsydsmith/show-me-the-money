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
    teacher_photo:'img/syd-headshot.jpg',
    price: 30 },
  { name: 'Repairing Your Credit ',
    photo: 'img/debt-101.jpg',
    description: 'In this 8-week course, we’ll break down the credit repair process step-by-step, providing tactical, actionable steps for each negative account type. Course Lessons: This is a weekly course. You will receive an email each week when the new lesson is available.',
    tagline:'Everything You Need to Know About Understanding, Managing and Fixing Your Credit.',
    teacher_name: 'Devin Smith',
    teacher_photo:'img/devin.jpg',
    price: 50 },
  { name: 'Negotiating Your Salary',
    photo: 'img/salary-negotiation.jpg',
    description: 'In this course, you’ll learn how to ask the right questions in a job offer, to request more responsibility on the job and how to become more comfortable during those dreaded conversations about salary. This discussion will walk you through the power of asking for more in your career and will help you find the confidence and resources needed to do so.',
    tagline:'Learn to Develop you Negotiation Skills and Ask the Right Questions During Job Offer.',
    teacher_name: 'Gatina Foy',
    teacher_photo:'img/gatina.png',
    price: 20 },
  { name: 'Real Estate Investing',
    photo: 'img/real-estate.jpg',
    description: 'Real Estate Investing includes specially designed worksheets and hands-on activities to take the guesswork out of your investing efforts. By emphasizing systems and service, this course will help you do more with less effort while serving the needs of your buyers and sellers.',
    tagline:'Learn professional real estate investing concepts and techniques to pick winners in investment real estate.',
    teacher_name: 'Devin Smith',
    teacher_photo:'img/devin.jpg',
    price: 50 },
  { name: 'Couponing 101',
    photo: 'img/couponing.png',
    description: 'This beginner’s guide to couponing will teach you the basics so you can start saving money with coupons. Here you will learn the right way to become a Strategic Shopper and  Couponer and be able to save anywhere from 50 – 90% on your grocery bill.',
    tagline:'Never used a coupon in your life? Learn the Basics of How to Save Money by Clipping Coupons.',
    teacher_name: 'Sydney Smith',
    teacher_photo:'img/syd-headshot.jpg',
    price: 30 },
  { name: 'Retirement 101',
    photo: 'img/saving.jpg',
    description: 'Retirement 101 is a course designed to increase awareness on retirement planning issues. This is a retirement planning course for individuals approaching or in retirement instructed by qualified financial planners with real world experience.',
    tagline: "How to Figure Out What You'll Need to Retire and Motivate You to Save Toward your Future.",
    teacher_name: 'Gatina Foy',
    teacher_photo:'img/gatina.png',
    price: 50 }
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
