
FROM node:13

EXPOSE 3000

COPY . /src

RUN yarn --network-timeout 100000

WORKDIR src

RUN pwd
RUN ls

CMD ["yarn", 'start']