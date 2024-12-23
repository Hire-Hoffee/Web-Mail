FROM node:22-alpine as builder

WORKDIR /client

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine

COPY --from=builder ../dist /out

CMD ["cp", "-r", "/out", "/build"]
