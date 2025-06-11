# ⚡ Real-Time Booking System

A real-time booking system built using **Node.js**, **WebSockets**, **MongoDB**, and **Apache Kafka** (Producer/Consumer pattern). It enables asynchronous booking event handling and real-time updates for users.

---

## 🚀 Features

- Real-time updates using WebSockets (`socket.io`)
- Asynchronous processing via Kafka producer/consumer
- MongoDB for data persistence
- Scalable modular architecture

---

## 🛠 Tech Stack

- Node.js + Express.js
- Kafka (Apache)
- MongoDB + Mongoose
- Socket.IO
- JavaScript (ES6)

---


---

## ⚙️ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
- [Kafka for Windows](https://kafka.apache.org/downloads)

---

## 🌀 Running Kafka on Windows

Kafka Setup and Node.js Integration This guide walks you through setting up Apache Kafka on Windows and configuring it with a Node.js application using kafka.js and socket.io for real-time communication.

Prerequisites Ensure the following software is installed:

Apache Kafka: Download Kafka Node.js and Express.js: Download Node.js Install Express.js in your Node.js project using npm install express Additional Node.js Libraries: kafka.js: Install via npm install kafkajs in your project directory socket.io: Install via npm install socket.io in your project directory

Step-by-Step Kafka Setup

Start Zookeeper Run the following command to start the Zookeeper server. Zookeeper manages and coordinates Kafka brokers:
cd C:\kafka .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties

Start Kafka Server With Zookeeper running, start the Kafka server:
.\bin\windows\kafka-server-start.bat .\config\server.properties

Create a Topic In this example, we’ll create a topic called bookings with a replication factor of 1 and one partition. Run this command in the Kafka directory:
.\bin\windows\kafka-console-consumer.bat --topic bookings --bootstrap-server localhost:9092 --from-beginning

Start a Consumer To test message flow, start a console consumer that reads from the beginning of the bookings topic:
.\bin\windows\kafka-console-consumer.bat --topic bookings --bootstrap-server localhost:9092 --from-beginning

Stopping Services To shut down Zookeeper and Kafka services gracefully:

Stop Zookeeper: .\bin\windows\zookeeper-server-stop.bat .\config\zookeeper.properties

Stop Kafka Server: .\bin\windows\kafka-server-stop.bat .\config\server.properties

5.Setting Up the Node.js Project In the project directory, initialize a new Node.js project and install required libraries:

npm init -y npm install express kafkajs socket.io


