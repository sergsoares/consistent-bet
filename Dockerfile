FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./

RUN npm install -g pnpm
RUN npm install -g pm2
RUN pnpm install

COPY . .

RUN npm run build

CMD ["npm", "run","start:prod"]
