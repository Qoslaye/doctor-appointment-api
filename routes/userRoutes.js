const express = require('express');
const { updateUser, deleteUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware'); // Import the protect middleware
const router = express.Router();

// Update User (Protected)
router.put('/:id', protect, updateUser);

// Delete User (Protected)
router.delete('/:id', protect, deleteUser);

module.exports = router;
