const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  academicYear: {
    type: String,
    required: true
  },
  classLevel: {
    type: String,
    required: true,
    enum: ['10th Board', '12th Science', '12th Commerce', 'School Internal']
  },
  pdfUrl: {
    type: String,
    required: true
  },
  toppers: [
    {
      name: String,
      percentage: String,
      rank: Number,
      image: String
    }
  ],
  isArchived: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Result', resultSchema);
