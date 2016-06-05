var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: String,
  description: String,
  tagline: String,
  teacher_name: String,
  teacher_photo: String;
  price: String,
}, { timestamps: true } );

module.exports = mongoose.model('Course', CourseSchema);
