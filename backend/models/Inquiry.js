const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: [true, 'Student name is required'],
    trim: true
  },
  parentName: {
    type: String,
    required: [true, 'Parent name is required'],
    trim: true
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/.+\@.+\..+/, 'Please enter a valid email']
  },
  gradeLevel: {
    type: String,
    required: [true, 'Grade level is required']
  },
  message: {
    type: String,
    required: [true, 'Message content is required']
  },
  status: {
    type: String,
    enum: ['Pending', 'Followed Up', 'In Discussion', 'Enrolled', 'Closed'],
    default: 'Pending'
  },
  assignedTo: {
    type: String,
    default: 'Admissions Office'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);
