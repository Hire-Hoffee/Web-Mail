FROM node:22-alpine AS builder

WORKDIR /client

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:22-alpine

COPY --from=builder /client/dist /out

CMD ["cp", "-r", "/out", "/build"]
