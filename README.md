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

1. **Start Zookeeper**
2. .\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties
.\bin\windows\kafka-server-start.bat .\config\server.properties
kafka-topics.bat --create --bootstrap-server localhost:9092 --replication-factor 1 --partition 1 --topic bookings

kafka-console-consumer.bat --topic bookings --bootstrap-server localhost:9092 --from-beginning
^
|
|
|
FOR KAFKA

FOR NODE.JS

npm install express----if note present
npm install

npm install kafkajs
npm install socket.io

to stop
.\bin\windows\zookeeper-server-stop.bat .\config\zookeeper.properties

.\bin\windows\kafka-server-stop.bat .\config\server.properties



