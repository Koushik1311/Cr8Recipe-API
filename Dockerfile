FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 5000/tcp

RUN yarn prisma db push

CMD ["yarn", "start:prod"]