# Node 24 LTS (supported until 2028-04-30) on current Debian stable; 24.22.1+ carries the fix
# for the Brotli decoder CVE-2026-111497 (Node 18 gets no fix). Node 22 ends 2027-04-30.
FROM node:24.22.2-trixie-slim

WORKDIR /var/www

COPY .output /var/www

ENV PORT=80

# --max-http-header-size: подсказки X-WB-Order / X-WB-Product от PHP приходят в заголовках запроса
# (аноним ~4–5 КБ плюс cookies). Лимит Node по умолчанию — 16 КБ на все заголовки, при превышении
# запрос отбивается с 431 до middleware, без отката к API.
ENTRYPOINT ["node", "--max-http-header-size=65536", "/var/www/server/index.mjs"]