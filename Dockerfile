FROM node:18-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install

RUN yarn build

EXPOSE 5000/tcp

CMD ["yarn", "start:prod"]