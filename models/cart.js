var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var CartCourseSchema = new mongoose.Schema({
  courses : [{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

module.exports = mongoose.model('CartCourse', CartCourseSchema);


