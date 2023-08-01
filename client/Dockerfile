FROM node:16.17.1-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app
# RUN npm install --no-progress --ignore-optional
# RUN npm cache clean -f
RUN npm i


# --no-progress --ignore-optional
RUN npm run build