FROM node:16

WORKDIR /backend-implementation

COPY package*.json ./
RUN npm install

COPY . .

RUN npm install -g nodemon

CMD ["nodemon", "producer.js"]
