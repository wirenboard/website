FROM ghcr.io/wirenboard/website-base-image:initial as builder

WORKDIR /var/www

COPY . /var/www

RUN pnpm install

RUN pnpm run build

FROM nginx

COPY --from=builder /var/www/.output/public/ /usr/share/nginx/html/
