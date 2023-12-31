# Development stage
FROM node:16 as development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY ./src ./src
CMD [ "npm", "run", "start" ]

# Builder stage
FROM development as builder
WORKDIR /usr/src/app