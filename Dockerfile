FROM node:alpine

WORKDIR /usr/app/src

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build

CMD ["node", "./app/build/ts/index.js"]