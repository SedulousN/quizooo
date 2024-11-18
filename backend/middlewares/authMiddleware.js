const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming User model is in models directory

// Middleware to verify token and user
const verifyUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer <token>"
    if (!token) return res.status(401).json({ error: 'Unauthorized, no token provided' });

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password'); // Exclude password field
    if (!user) return res.status(401).json({ error: 'Unauthorized, user not found' });

    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized, invalid token' });
  }
};

// Middleware to verify admin role
const verifyAdmin = async (req, res, next) => {
  try {
    // Ensure user is authenticated
    await verifyUser(req, res, async () => {
      if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Forbidden, admin access only' });
      }
      next(); // If user is admin, proceed
    });
  } catch (error) {
    res.status(403).json({ error: 'Forbidden, failed admin verification' });
  }
};

module.exports = { verifyUser, verifyAdmin };
