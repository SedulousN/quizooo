// controllers/adminController.js
const Contest = require('../models/Contest');
const User = require('../models/User');
const Submission = require('../models/Submission');

// Get all contests
exports.getAllContests = async (req, res) => {
  try {
    const contests = await Contest.find();
    res.json(contests);
  } catch (error) {
    res.status(500).send('Error fetching contests');
  }
};

// Delete a contest
exports.deleteContest = async (req, res) => {
  try {
    await Contest.findByIdAndDelete(req.params.id);
    res.status(200).send('Contest deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting contest');
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
};

// Get all submissions
exports.getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find().populate('user').populate('problem');
    res.json(submissions);
  } catch (error) {
    res.status(500).send('Error fetching submissions');
  }
};
