FROM nginx

# Not really useful outside GitHub Actions - actual builds happens there,
# Dockerfile just copies the output to various flavors of Nginx image

COPY .output/public/ /usr/share/nginx/html/
