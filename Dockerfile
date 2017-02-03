FROM node:latest
MAINTAINER gareth.xxxx@xmail.com

#RUN adduser --system --no-create-home app && npm install -g npm@4.1.2
RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app
COPY package.json $HOME
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME
RUN npm install

USER root
COPY . $HOME
RUN chown -R app:app $HOME/*
USER app
# application's default port
#EXPOSE 3000

CMD ["npm", "start"]
