const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const Booking = require('./models/Booking');
const bookingRoutes = require('./routes/booking');
const consumeBookings = require('./consumer');
const sendMessage = require('./producer');
const path = require('path');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// In-memory object to store booking count per service
const serviceCounts = {};

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use('/bookings', bookingRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/booking-app', { useNewUrlParser: true, useUnifiedTopology: true });

// Handle new bookings and update service count
app.post('/bookings', async (req, res) => {
  const { serviceName, userEmail, bookingTime } = req.body;

  const newBooking = new Booking({
    serviceName,
    userEmail,
    bookingTime
  });

  await newBooking.save();

  // Update the service count for the respective service
  if (!serviceCounts[serviceName]) {
    serviceCounts[serviceName] = 0;
  }
  serviceCounts[serviceName]++;

  // Emit updated service count to frontend
  io.emit('service-counts', serviceCounts);

  // Send the new booking to Kafka
  sendMessage('bookings', newBooking)
    .then(() => {
      console.log('Booking sent to Kafka topic');
    })
    .catch((err) => {
      console.error('Error sending booking to Kafka', err);
    });

  res.status(200).json({ message: 'Booking created', booking: newBooking });
});

// Start Kafka consumer to listen for new bookings
consumeBookings();

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

global.io = io;
