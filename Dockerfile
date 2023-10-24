FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn build

EXPOSE 5000/tcp

RUN yarn prisma db push

ENV DATABASE_URL=<your_database_url>

CMD ["yarn", "start:prod"]