const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const uploadAttachment = require('../middleware/uploadAttachment');
const { protect } = require('../middleware/auth');

router.post('/', protect, upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ status: 'fail', message: 'No file uploaded' });
    }
    
    res.status(200).json({
      status: 'success',
      url: req.file.path // This is the secure Cloudinary URL
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

router.post('/attachment', protect, uploadAttachment.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ status: 'fail', message: 'No file uploaded' });
    }
    
    res.status(200).json({
      status: 'success',
      url: req.file.path, // This is the secure Cloudinary URL
      public_id: req.file.filename // Cloudinary stores public_id in filename property of req.file
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

module.exports = router;
