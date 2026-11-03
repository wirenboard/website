# 22.23.4 and newer: fix for the Brotli decoder CVE-2026-111497 (Node 18 gets no fix)
FROM node:22.23.4-bookworm-slim

WORKDIR /var/www

COPY .output /var/www

ENV PORT=80

# --max-http-header-size: подсказки X-WB-Order / X-WB-Product от PHP приходят в заголовках запроса
# (аноним ~4–5 КБ плюс cookies). Лимит Node по умолчанию — 16 КБ на все заголовки, при превышении
# запрос отбивается с 431 до middleware, без отката к API.
ENTRYPOINT ["node", "--max-http-header-size=65536", "/var/www/server/index.mjs"]