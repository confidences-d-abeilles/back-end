
FROM node:13

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn --network-timeout 100000

COPY . .

EXPOSE 3000

RUN pwd
RUN ls

CMD yarn start