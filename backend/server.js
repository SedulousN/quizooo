const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


// Import Routes
const authRoutes = require('./routes/authRoutes');
const contestRoutes = require('./routes/contestRoutes');
const riddleRoutes = require('./routes/riddleRoutes');
const submissionRoutes = require('./routes/submissionRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Base Route
app.get('/', (req, res) => {
  res.send('Contest Platform API is running...');
});

// API Routes
app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/contests', contestRoutes); // Contest management routes
app.use('/api/riddles', riddleRoutes); // Riddle routes
app.use('/api/submissions', submissionRoutes); // Submission handling routes

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
