FROM node:boron

ADD ./alexa-rank-feature-1.0.0.tgz .

RUN cd package && npm install

EXPOSE 3000
ENTRYPOINT cd package && npm start
