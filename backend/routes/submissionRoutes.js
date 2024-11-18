const express = require('express');
const { submitSolution, getSubmissions } = require('../controllers/submissionController');
const { verifyUser } = require('../middlewares/authMiddleware');

const router = express.Router();

// Submit a solution for a contest
router.post('/:contestId/submit', verifyUser, submitSolution);

// Get all submissions for a contest
router.get('/:contestId/submissions', verifyUser, getSubmissions);

module.exports = router;
