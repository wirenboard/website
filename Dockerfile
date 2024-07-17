FROM ghcr.io/wirenboard/website-base-image:initial

WORKDIR /var/www

COPY package.json /var/www
RUN pnpm install

COPY . /var/www
RUN pnpm run build

ENV PORT=80

ENTRYPOINT ["/usr/bin/node", "/var/www/.output/server/index.mjs"]