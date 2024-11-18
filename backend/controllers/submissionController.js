const Submission = require('../models/Submission');
const Contest = require('../models/Contest');

// Submit a solution for a contest
exports.submitSolution = async (req, res) => {
  try {
    const { userId, solution } = req.body;
    const contestId = req.params.contestId;

    const submission = new Submission({ userId, contestId, solution });
    await submission.save();

    res.status(201).json({ message: 'Solution submitted successfully', submission });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit solution' });
  }
};

// Get submissions for a specific contest
exports.getSubmissions = async (req, res) => {
  try {
    const contestId = req.params.contestId;
    const submissions = await Submission.find({ contestId }).populate('userId', 'username');
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
};
