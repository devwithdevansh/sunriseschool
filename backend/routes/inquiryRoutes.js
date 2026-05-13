const express = require('express');
const { z } = require('zod');
const validate = require('../middleware/validate');
const { protect } = require('../middleware/auth');
const { 
  submitInquiry, 
  getInquiries, 
  updateInquiry, 
  deleteInquiry 
} = require('../controllers/inquiryController');

const router = express.Router();

// Validation Schema
const inquirySchema = z.object({
  body: z.object({
    studentName: z.string().min(2, 'Name is too short'),
    parentName: z.string().min(2, 'Name is too short'),
    phoneNumber: z.string().regex(/^[0-9+\s-]{10,15}$/, 'Invalid phone number'),
    email: z.string().email('Invalid email address'),
    gradeLevel: z.string(),
    message: z.string().min(5, 'Message is too short')
  })
});

// Routes
router.post('/', validate(inquirySchema), submitInquiry);
router.get('/', protect, getInquiries);
router.patch('/:id', protect, updateInquiry);
router.delete('/:id', protect, deleteInquiry);

module.exports = router;
