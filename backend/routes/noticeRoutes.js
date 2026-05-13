const express = require('express');
const { z } = require('zod');
const validate = require('../middleware/validate');
const { protect } = require('../middleware/auth');
const { 
  getNotices, 
  createNotice, 
  updateNotice, 
  deleteNotice 
} = require('../controllers/noticeController');

const router = express.Router();

// Validation Schema
const noticeSchema = z.object({
  body: z.object({
    title: z.string().min(5, 'Title must be at least 5 characters').max(100),
    category: z.enum(['General', 'Exams', 'Events', 'Holidays']),
    content: z.string().min(10, 'Content must be at least 10 characters'),
    isPinned: z.boolean().optional(),
    attachmentUrl: z.string().url().optional().nullable()
  })
});

// Routes
router.get('/', getNotices);
router.post('/', protect, validate(noticeSchema), createNotice);
router.put('/:id', protect, validate(noticeSchema.partial()), updateNotice);
router.delete('/:id', protect, deleteNotice);

module.exports = router;
