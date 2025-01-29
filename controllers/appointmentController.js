const Appointment = require('../models/Appointment');

// Create an Appointment (Patient)
exports.createAppointment = async (req, res) => {
  try {
    const { doctorId, date, time, reason } = req.body;
    const patientId = req.user.id; // Get patient ID from JWT token

    const newAppointment = await Appointment.create({
      patientId,
      doctorId,
      date,
      time,
      reason,
    });

    res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get Appointments (Doctor & Patient)
exports.getAppointments = async (req, res) => {
  try {
    const { role, id } = req.user;

    let appointments;
    if (role === 'doctor') {
      appointments = await Appointment.find({ doctorId: id }).populate('patientId', 'fullName email');
    } else if (role === 'patient') {
      appointments = await Appointment.find({ patientId: id }).populate('doctorId', 'fullName email');
    } else {
      return res.status(403).json({ message: 'Access forbidden' });
    }

    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update Appointment Status (Doctor Only)
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (req.user.role !== 'doctor') {
      return res.status(403).json({ message: 'Only doctors can update appointments' });
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment status updated', appointment: updatedAppointment });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete Appointment (Patient or Doctor)
exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const role = req.user.role;

    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    if (appointment.patientId.toString() !== userId && role !== 'doctor') {
      return res.status(403).json({ message: 'Unauthorized to delete this appointment' });
    }

    await Appointment.findByIdAndDelete(id);
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
