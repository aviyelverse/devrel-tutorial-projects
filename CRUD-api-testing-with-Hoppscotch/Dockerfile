FROM node:14.1.0

EXPOSE 8080

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . . 

CMD ["node", "index.js"]
