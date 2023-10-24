FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn prisma db push

RUN yarn build

EXPOSE 5000/tcp

CMD ["yarn", "start:prod"]