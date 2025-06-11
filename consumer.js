/*const { Kafka } = require('kafkajs');
const io = require('./socket'); // Importing Socket.IO instance

const kafka = new Kafka({
  clientId: 'booking-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'booking-group' });

const consumeBookings = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'bookings', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const booking = JSON.parse(message.value.toString());
        console.log('New booking received:', booking);

        // Send booking details to clients via Socket.IO
        io.emit('newBooking', booking);
      } catch (error) {
        console.error('Failed to parse message as JSON:', message.value.toString(), error);
      }
    },
  });
};

module.exports = consumeBookings;*/
const { Kafka } = require('kafkajs');
const io = require('./socket'); // Ensure correct import for Socket.IO instance

const kafka = new Kafka({
  clientId: 'booking-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'booking-group' });

const consumeBookings = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'bookings', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        const booking = JSON.parse(message.value.toString());
        console.log('New booking received:', booking);

        // Emit booking details to all connected clients
        io.emit('new-booking', booking);
      } catch (error) {
        console.error("Error processing Kafka message:", error);
      }
    },
  });
};

module.exports = consumeBookings;


