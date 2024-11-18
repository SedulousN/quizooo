const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: false },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  performance: [{ contestId: String, score: Number }],
});

module.exports = mongoose.model('User', userSchema);
