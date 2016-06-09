var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: String,
  description: String,
  tagline: String,
  teacher_name: String,
  teacher_photo: String,
  price: { type: Number, min: 0, max: 9999.99 },
}, { timestamps: true } );

module.exports = mongoose.model('Course', CourseSchema);
