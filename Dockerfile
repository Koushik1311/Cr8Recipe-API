FROM node:18-alpine

WORKDIR /user/src/app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start:prod"]