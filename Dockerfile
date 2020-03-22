
FROM node:13

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn

COPY . .

EXPOSE 3000

CMD yarn start