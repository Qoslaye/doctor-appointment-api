const express = require('express');
const {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
  deleteAppointment,
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware'); // Ensure user is authenticated

const router = express.Router();

// Create an appointment (Patient)
router.post('/', protect, createAppointment);

// Get all appointments (Doctor can see all, Patient sees only their own)
router.get('/', protect, getAppointments);

// Update appointment status (Doctor only)
router.put('/:id', protect, updateAppointmentStatus);

// Delete appointment (Patient can cancel, Doctor can remove)
router.delete('/:id', protect, deleteAppointment);

module.exports = router;
