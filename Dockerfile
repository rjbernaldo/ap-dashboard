FROM node:latest

ENV APP /home/docker/app
ENV NPM_PATH /home/docker/.npm-global
ENV NPM_CONFIG_PREFIX $NPM_PATH

RUN npm install -g yarn

RUN mkdir -p $APP
RUN mkdir -p $NPM_PATH

WORKDIR $APP

COPY package.json $APP
RUN yarn install

COPY . $APP