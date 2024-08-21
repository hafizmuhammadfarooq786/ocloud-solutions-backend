const { createChannel, closeChannel } = require("../connection");

describe("App", () => {
  let channel;
  const testMessage = {
    message_id: "test-uuid",
    created_on: new Date().toISOString(),
  };

  beforeAll(async () => {
    try {
      channel = await createChannel();
      await channel.assertQueue("message_queue", { durable: true });
    } catch (error) {
      console.error("Error setting up RabbitMQ connection:", error);
      throw error;
    }
  });

  afterAll(async () => {
    try {
      return await closeChannel();
    } catch (error) {
      console.error("Error closing RabbitMQ connection:", error);
      throw error;
    }
  });

  test("should send messages with correct format", () => {
    console.log(`Message sent: ${JSON.stringify(testMessage)}`);
    channel.sendToQueue(
      "message_queue",
      Buffer.from(JSON.stringify(testMessage))
    );
  });
});
