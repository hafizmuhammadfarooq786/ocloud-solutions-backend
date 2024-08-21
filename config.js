const RABBITMQ_URL = process.env.RABBITMQ_URL || "amqp://localhost:5673";
const QUEUE_NAME = process.env.QUEUE_NAME || "message_queue";
const INTERVAL_MS = process.env.INTERVAL_MS || 5000;

module.exports = { RABBITMQ_URL, QUEUE_NAME, INTERVAL_MS };
