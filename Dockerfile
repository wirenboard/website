FROM ghcr.io/wirenboard/website-base-image:initial

WORKDIR /var/www

COPY . /var/www

RUN pnpm install

RUN pnpm run build

RUN cp -r /var/www/.output/public/* /usr/share/nginx/html