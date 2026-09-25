# Brad Barton — personal site

Одностраничный статический сайт на **Astro**. Без бэкенда и БД: на выходе чистый HTML/CSS/JS в `dist/`.

## Быстрый старт

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/
npm run preview   # проверить сборку локально
```

Нужен Node.js **22.12+**.

## Как менять контент (для администратора)

Весь контент — в одном файле **`src/content/site.ts`**. Структура страницы при этом не трогается.
У каждого текста рядом в комментарии лежит вариант B из ТЗ.

| Что поменять | Где |
|---|---|
| Тексты всех 10 блоков | объекты `hero`, `profile`, `background`, `principles`, `media`, `posts`, `personal`, `place`, `follow`, `contact` |
| Портрет | файл в `public/img/`, путь в `hero.portrait` |
| Строка «Co-Founder of Atom Ventures» | `atom.show` (`false` — скрыть) |
| Фото-архив | массив `archive.items`: `src`, `alt`, `caption`, `size` (wide/tall), `pos`. Файлы в `public/img/archive/` |
| Посты Facebook (6–9 карточек) | массив `posts.items`: `date`, `type`, `excerpt` (короткий анонс), `url` на оригинал. Пусто — показывается ссылка на профиль |
| Встроенное видео | `media.featured`: `{ platform: 'youtube' \| 'rumble', id, title }`. Только официальный embed и после разрешения |
| Соцсети | объект `socials` |
| Контакт-форма | `contact.formEndpoint` (Formspree / Web3Forms / свой). Пусто — только кнопки на каналы |
| Title / description / OG-картинка | объект `site` |

После правок — `npm run build` и выложить `dist/` (или пересобрать Docker-образ).

Правило из ТЗ п.4: не публиковать даты, статистику команд, названия программ/шоу, должности,
показатели просмотров, семейные фото и email без подтверждения клиентом.

## Деплой

См. `DEPLOY.md`.

## Структура

```
src/
  content/site.ts      весь контент
  components/          Hero, Profile, Background, Principles, Media, Posts, Roots (Personal+Place), Follow, Contact, Nav, Footer
  layouts/Base.astro   SEO-голова: title, description, canonical, OG, Twitter, JSON-LD
  lib/schema.ts        Schema.org Person + WebSite
  lib/imgSize.ts       реальные размеры картинок на этапе сборки
  styles/global.css    токены, типографика, кнопки, карточки
  pages/index.astro    главная и 404
public/
  img/brad-portrait.webp, img/og-default.jpg, favicon.png, apple-touch-icon.png, robots.txt
```
