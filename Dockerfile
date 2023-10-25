FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 3301/tcp

ARG DATABASE_URL

CMD ["yarn", "start"]