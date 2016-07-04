FROM alpine
MAINTAINER denis <denis@gmail.com>
RUN apk update && apk add nodejs
WORKDIR app
RUN npm install -g nodemon
#RUN npm install
EXPOSE 8000
ENV NODE_ENV development
CMD ["nodemon", "server/server.js"]
#ENTRYPOINT ["node", "server.js"]

