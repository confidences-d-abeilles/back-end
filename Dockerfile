
FROM node:13

EXPOSE 3000

COPY . /src
WORKDIR src

RUN yarn --network-timeout 100000


RUN pwd
RUN ls

CMD yarn start