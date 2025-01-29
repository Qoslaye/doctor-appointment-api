require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Import the database connection
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

// Connect to MongoDB
connectDB(); // Call the function to establish a database connection

// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);

// Default Route for Testing
app.get('/', (req, res) => {
  res.send('Welcome to the Doctor Appointment API');
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
