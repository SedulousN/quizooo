const Contest = require('../models/Contest');

// Get a riddle for a specific contest
exports.getRiddle = async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    if (!contest) return res.status(404).json({ error: 'Contest not found' });
    res.json({ riddle: contest.riddle });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch riddle' });
  }
};

// Validate riddle answer
exports.validateRiddle = async (req, res) => {
  try {
    const { answer } = req.body;
    const contest = await Contest.findById(req.params.id);
    if (!contest) return res.status(404).json({ error: 'Contest not found' });

    const isCorrect = answer === contest.riddleAnswer;
    res.json({ correct: isCorrect });
  } catch (error) {
    res.status(500).json({ error: 'Failed to validate riddle answer' });
  }
};
