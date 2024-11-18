const Contest = require('../models/Contest');
const multer = require('multer');
const path = require('path');

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists or create it
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to avoid name conflicts
  }
});
const upload = multer({ storage: storage });

// GET all contests
exports.getContests = async (req, res) => {
  try {
    const contests = await Contest.find();
    res.status(200).json(contests);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contests', error: error.message });
  }
};

exports.getContestById = async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    if (!contest) {
      return res.status(404).json({ message: 'Contest not found' });
    }
    res.json(contest);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST to create a new contest with file upload
exports.createContest = async (req, res) => {
  const { name, type, date, time, description } = req.body;
  const file = req.file ? req.file.path : '';

  // Basic validation
  if (!name || !type || !date || !time || !description) {
    return res.status(400).json({ message: 'Please fill in all required fields.' });
  }

  // Check if the contest date is in the past
  const currentDate = new Date();
  const contestDate = new Date(date);
  if (contestDate < currentDate) {
    return res.status(400).json({ message: 'The contest date cannot be in the past.' });
  }

  try {
    const newContest = new Contest({
      name,
      type,
      date,
      time,
      description,
      file, // Save file path if present
    });

    await newContest.save();
    res.status(201).json({ message: 'Contest created successfully!', contest: newContest });
  } catch (error) {
    res.status(500).json({ message: 'Error creating contest', error: error.message });
  }
};

// Multer middleware for file upload
exports.upload = upload.single('file');  // Use this middleware in routes
