# Деплой — сайт Brad Barton

Статический сайт на Astro. Без сервера и БД — на выходе `dist/` с HTML/CSS/JS.
Схема та же, что у saksonaudzmitry.com, но проще: **один язык, один контейнер**.

## Вариант 1. Docker (рекомендуется)

```bash
docker build --build-arg SITE_URL=https://<домен> -t bradbarton .
docker run -d --name bradbarton -p 8080:8080 --restart unless-stopped bradbarton
```

Контейнер слушает `:8080` (plain HTTP). Перед ним — Cloudflare Tunnel или любой reverse-proxy с TLS.
`/healthz` отдаёт `ok` для healthcheck.

`SITE_URL` обязателен: от него зависят canonical, `og:url` и sitemap. Если домен поменялся — пересобрать образ.

## Вариант 2. Просто статика

```bash
SITE_URL=https://<домен> npm run build
```

Содержимое `dist/` выложить на любой статический хостинг (nginx, Cloudflare Pages, Vercel, Netlify).
Для nginx: `try_files $uri $uri.html $uri/index.html =404;` и отдавать `404.html` на 404.

## Перед публикацией

1. Заменить плейсхолдер `bradbarton.com` на реальный домен в `Caddyfile` (редирект www → apex), `public/robots.txt` (Sitemap) и дефолте `SITE_URL` в `Dockerfile` / `astro.config.mjs`.
2. Контент правится только в `src/content/site.ts`. Если клиент даст endpoint формы — вписать в `contact.formEndpoint` (пусто = только кнопки на каналы).
3. Редиректы на уровне прокси: `http → https`, `www → apex`.
4. После деплоя: Google Search Console → добавить домен → отправить `/sitemap-index.xml`.
5. Проверить превью ссылки (OG) через https://www.opengraph.xyz/ или отправив ссылку в Telegram.

## Что не сделано

- Аналитика (Метрика / GA / Pixel) — не подключена намеренно, добавить по запросу клиента.
- Обработчик контакт-формы — нужен адрес endpoint от клиента.
