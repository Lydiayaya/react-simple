FROM node:14-alpine
WORKDIR /home/dev/lydia
ADD . /home/dev/lydia
RUN npm install
EXPOSE 3125
CMD npm start
