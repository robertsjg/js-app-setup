FROM node:latest
MAINTAINER admin.xxxx@xmail.com

RUN apt-get -qq update -y && apt-get -qq install vim
RUN useradd --user-group --create-home --shell /bin/false app
ENV HOME=/home/app
COPY package.json $HOME
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME
RUN npm install


USER root
COPY . $HOME
RUN chown -R app:app $HOME/* &&  npm install localtunnel -g
USER app

CMD ["npm run", "build"]
