FROM node:18.19.0-slim

WORKDIR /var/www

COPY .output /var/www

ENV PORT=80

ENTRYPOINT ["node", "/var/www/server/index.mjs"]