FROM node:16-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install

RUN npm run build

CMD ["node", "start:prod"]
