var express = require('express');
var router = express.Router();
​
var courses = [
 /* { title: 'Star Wars: The Force Awakens', year: 2015 },
  { title: 'The Matrix',                   year: 2005 },
  { title: 'Groundhog Day',                year: 1996 }*/
];
​
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(courses);
});
​
module.exports = router;
