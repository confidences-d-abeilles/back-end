
FROM node:13

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn config delete proxy
RUN yarn --network-timeout 100000

COPY . .

EXPOSE 3000

CMD yarn start