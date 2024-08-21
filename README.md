# Node.js RabbitMQ Producer-Consumer Application

This repository contains a Node.js application that demonstrates a simple producer-consumer pattern using RabbitMQ. The producer sends messages with a unique user ID and a timestamp every 5 seconds, and the consumer listens to these messages and logs them upon receipt. The application is containerized using Docker and managed with Docker Compose.

## Configuration (Environment Variables)

- RABBITMQ_URL: The URL of the RabbitMQ server (default: amqp://guest:guest@rabbitmq:5672).
- QUEUE_NAME: The name of the RabbitMQ queue to send/receive messages (default: message_queue).
- INTERVAL_MS: The interval (in milliseconds) at which the producer sends messages (default: 5000).

These can be modified in the docker-compose.yml file or passed as environment variables.

## Prerequisites

- Docker (version 27.1.1 or higher recommended)
- Docker Compose
- Node.js (version 16.x recommended)

## Project Structure

- producer.js: A Node.js script that sends messages to a RabbitMQ queue every 5 seconds.
- consumer.js: A Node.js script that consumes messages from the RabbitMQ queue and logs them.
- connection.js: A module that handles the creation of a RabbitMQ channel used by both the producer and the consumer.
- Dockerfile: Dockerfile for building the Node.js application image.
- docker-compose.yml: A Docker Compose configuration file to manage the RabbitMQ service, producer, and consumer containers.
- test/: Contains the test files for the app using Jest.

## Getting Started

1. ### Clone the Repository

```
git clone https://github.com/hafizmuhammadfarooq786/ocloud-solutions-backend.git
cd ocloud-solutions-backend.git
```

2. ### Build and Start the Docker Containers

Use Docker Compose to build and start the containers for RabbitMQ, the producer, and the consumer.

```
docker-compose up --build
```

3. ### Access RabbitMQ Management Console

RabbitMQ includes a management plugin that provides an HTTP-based API and web UI. You can access the RabbitMQ management console at:

```
http://localhost:15673
```

Default credentials:

- Username: guest
- Password: guest

4. ### Verify Producer and Consumer Logs

Once the containers are running, you can observe the logs for the producer and consumer:

- Producer logs: Shows the messages being sent to RabbitMQ.
- Consumer logs: Shows the messages being received from RabbitMQ.

```
docker-compose logs -f producer
docker-compose logs -f consumer
```

5. ### Running Tests

The project includes tests for both the producer and consumer using the Jest testing library. To run the tests:

```
pnpm test
```

6. ### Stop the Application

To stop the running Docker containers, use the following command:

```
docker-compose down
```
