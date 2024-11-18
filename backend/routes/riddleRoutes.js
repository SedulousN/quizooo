const express = require('express');
const { getRiddle, validateRiddle } = require('../controllers/riddleController');
const router = express.Router();

// Get riddle for a specific contest
router.get('/:id/riddle', getRiddle);

// Validate riddle answer
router.post('/:id/riddle', validateRiddle);

module.exports = router;
