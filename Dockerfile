FROM node:10.13-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3003

CMD npm run start

# CMD npm run-script seed && \ npm start 