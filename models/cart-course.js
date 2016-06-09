var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var CartCourseSchema = new mongoose.Schema({
  course : {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  qty : Number
});

module.exports = mongoose.model('CartCourse', CartCourseSchema);


