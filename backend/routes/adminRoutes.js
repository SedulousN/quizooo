// routes/adminRoutes.js

const express = require('express');
const router = express.Router();
const { getAllContests, deleteContest, getAllUsers, getAllSubmissions } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes protected with admin authentication middleware
router.get('/contests', authMiddleware.isAdmin, getAllContests);  // Get all contests
router.delete('/contests/:id', authMiddleware.isAdmin, deleteContest);  // Delete a contest
router.get('/users', authMiddleware.isAdmin, getAllUsers);  // Get all users
router.get('/submissions', authMiddleware.isAdmin, getAllSubmissions);  // Get all submissions

module.exports = router;
