FROM nginx

COPY ./.output/public/ /usr/share/nginx/html/
