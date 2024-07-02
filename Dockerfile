FROM nginx

WORKDIR /var/www

RUN apt-get update

RUN apt-get install -y \
    npm

RUN npm install -g pnpm

COPY . /var/www

RUN pnpm install

RUN pnpm run build

RUN cp -r /var/www/.output/public/* /usr/share/nginx/html