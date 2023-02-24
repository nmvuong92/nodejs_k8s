FROM node:16-alpine

WORKDIR /index

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

EXPOSE 3000

CMD node index.js