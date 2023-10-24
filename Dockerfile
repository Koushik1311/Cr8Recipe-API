FROM node:18-alpine

WORKDIR /user/src/app

COPY . .

RUN yarn install

RUN yarn build

CMD ["yarn", "start:prod"]