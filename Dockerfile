FROM node:16-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY package*.json ./
#RUN npm ci
RUN npm install

COPY --chown=node:node . .
RUN npm run build \
    && npm prune --production

CMD ["node", "start:prod"]
