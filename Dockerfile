FROM node:15-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --production

USER node

COPY . .

EXPOSE 3000

CMD [ "node", "./src/bin/www" ]