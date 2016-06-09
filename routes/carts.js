var express = require('express');
var router = express.Router();

var Course = require('../models/course');
var Cart = require('../models/cart')

function seedCarts() {
  var carts = [
    { courses: [] }
  ];

  Cart.find({}).remove()
    .then(function() {
      return Cart.create(carts);
    })
    .then(function() {
      return Cart.find({});
    })
    .then(function(found) {
      console.log('We saved and retrieved', found.length, 'courses in your cart.');
    });
}

seedCarts();

// INDEX Route
router.get('/', function(req, res, next) {
    Cart.find({})
        .then(function(carts) {
            res.json(carts);
        });
});

// SHOW Route
router.get('/:id', function(req, res, next) {
  Cart.findById(req.params.id)
  .then(function(cart) {
    if (!cart) {
      res.status(404).json( { error: 'Not found' } );
    }
    res.json(cart);
  })
  .catch(function(err) {
    return next(err);
  });
});

// CREATE /api/cart-courses/buy/575993099e2cb768b7fed426
router.post('/buy/:courseId', function(req, res, next) {
  console.log('Starting the buy process');
  Cart.findOne({})
  .then(function(cart) {
    if (!cart) return next({ message: 'Cart not found' });
    Course.findById(req.params.courseId)
    .then(function(course) {
      console.log(course);
      if (!course) return next({ message: 'Course not found' });
      cart.courses.push(course);
      cart.save()
      .then(function(saved) {
        console.log('cart after buy = ', saved);
        Cart.populate(saved, {path: 'courses', model: 'Course'}, function(err, savedCart) {
          console.log(savedCart);
          res.json(savedCart);
        });
        //res.json(saved);
      });
    });
  });
});

module.exports = router;
