// producer.js
/*const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'booking-app',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const sendMessage = async (topic, message) => {
  await producer.connect();
  await producer.send({
    topic,
    messages: [{ value: JSON.stringify(message) }],
  });
  await producer.disconnect();
};

module.exports = sendMessage;*/
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'booking-app',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const sendMessage = async (topic, message) => {
  await producer.connect(); // Ensure the producer is connected before sending messages
  try {
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  } catch (error) {
    console.error("Error sending message to Kafka:", error);
  } finally {
    await producer.disconnect(); // Disconnect the producer after sending the message
  }
};

module.exports = sendMessage;

