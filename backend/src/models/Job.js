const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  type: String,
  description: String,
  requiredSkills: [String]
}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
