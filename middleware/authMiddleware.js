const jwt = require('jsonwebtoken');

// Protect Middleware: Verifies JWT token
exports.protect = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Get token from the Authorization header

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data (id, role) from the token to the request object
    next(); // Call the next middleware or route handler
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, invalid token' });
  }
};
