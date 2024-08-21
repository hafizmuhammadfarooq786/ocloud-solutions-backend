const amqp = require("amqplib");

const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://localhost:5673";

let connection;
let channel;
async function createChannel() {
  try {
    connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    return channel;
  } catch (error) {
    console.error("Error in creating RabbitMQ channel:", error);
    throw error;
  }
}

async function closeChannel() {
  try {
    if (channel) await channel.close();
    await connection.close();
    return;
  } catch (error) {
    console.error("Error in closing RabbitMQ channel:", error);
    throw error;
  }
}

module.exports = { createChannel, closeChannel };
