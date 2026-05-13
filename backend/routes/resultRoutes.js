const express = require('express');
const { protect } = require('../middleware/auth');
const { 
  getResults, 
  createResult, 
  updateResult, 
  deleteResult 
} = require('../controllers/resultController');

const router = express.Router();

router.get('/', getResults);
router.post('/', protect, createResult);
router.put('/:id', protect, updateResult);
router.delete('/:id', protect, deleteResult);

module.exports = router;
