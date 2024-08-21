const { createChannel } = require("./connection");
const { v4: uuidv4 } = require("uuid");
const { QUEUE_NAME, INTERVAL_MS } = require("./config");

async function sendMessage() {
  try {
    const channel = await createChannel();

    await channel.assertQueue(QUEUE_NAME, { durable: true });

    setInterval(() => {
      const message = {
        message_id: uuidv4(),
        created_on: new Date().toISOString(),
      };

      const messageString = JSON.stringify(message);
      console.log(`Message sent: ${JSON.stringify(messageString)}`);
      channel.sendToQueue(
        QUEUE_NAME,
        Buffer.from(JSON.stringify(messageString))
      );
    }, INTERVAL_MS);
  } catch (error) {
    console.error("Error in sending message:", error);
  }
}

sendMessage();
