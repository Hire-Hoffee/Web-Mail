FROM node:22-alpine

WORKDIR /server

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 7003

CMD rm -rf ./dist && cp -r /build/out ./dist && npm start
