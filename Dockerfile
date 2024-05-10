FROM docker.io/nginx:alpine

WORKDIR /app

COPY ./out/. .

COPY ./nginx.conf /etc/nginx/nginx.conf