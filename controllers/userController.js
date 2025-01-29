const User = require('../models/User');

// Update User Details
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Get user ID from params
    const updates = req.body; // Get the fields to update from the request body

    // Find the user by ID and update
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
      runValidators: true, // Run Mongoose validators
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// Delete a User
exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params; // Get user ID from params
  
      // Find the user by ID and delete
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  