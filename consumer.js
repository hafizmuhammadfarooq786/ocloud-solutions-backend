const { createChannel } = require("./connection");
const { QUEUE_NAME } = require("./config");

async function receiveMessages() {
  try {
    const channel = await createChannel();
    await channel.assertQueue(QUEUE_NAME, { durable: true });

    channel.consume(QUEUE_NAME, (msg) => {
      if (msg !== null) {
        const message = msg.content.toString();
        console.log(`Message received: ${message}`);
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.error("Error in receiving message:", error);
  }
}

receiveMessages();
