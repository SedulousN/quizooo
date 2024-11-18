const mongoose = require('mongoose');

// Define the schema for the Contest model
const contestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Contest name is required'],
    trim: true,
  },
  type: {
    type: String,
    required: [true, 'Contest type is required'],
    enum: ['weekly', 'one-day', 'bi-weekly', 'other'], // Enforce contest types
    trim: true,
  },
  date: {
    type: Date,
    required: [true, 'Contest date is required'],
  },
  time: {
    type: String,
    required: [true, 'Contest time is required'],
  },
  description: {
    type: String,
    required: [true, 'Contest description is required'],
    trim: true,
  },
  file: {
    type: String, // Path to the uploaded file
    default: '',
  },
}, {
  timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
});

// Create and export the model
const Contest = mongoose.models.Contest || mongoose.model('Contest', contestSchema);

module.exports = Contest;
