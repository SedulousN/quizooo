const express = require('express');
const contestController = require('../controllers/contestController');

const router = express.Router();

// GET request to fetch all contests
router.get('/', contestController.getContests);

// POST request to create a new contest
router.post('/', contestController.upload, contestController.createContest);

router.get('/:id', contestController.getContestById);


module.exports = router;
