FROM node:12-alpine

WORKDIR /home/app

COPY package.json /home/app/

RUN npm install

COPY . /home/app/

CMD ["npm","start" ]