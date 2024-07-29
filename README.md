# Wirenboard website

## Инструкции редакторам
Для локального просмотра md файлов можно использовать [плагин](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc).

- [Как добавить партнера](./content/ru/_partners/software/.README.md)
- [Как добавить интегратора](./content/ru/_partners/integrator/.README.md)
- [Как добавить вакансию](./content/ru/jobs/.README.md)
- [Как добавить ссылку на статью](./content/ru/_articles/.README.md)

## Как запустить сайт локально

- установите [NodeJS](https://nodejs.org/en/download/).
- установите [pnpm](https://pnpm.io/installation).
- установите зависимости проекта

    ```bash
    pnpm install
    ```
- запустите сервер локально

    ```bash
    pnpm run dev
    ```

Просмотрел будет доступен по адресу `http://localhost:3000`


## Деплой в продакшен

Создайте пул реквест в `main` ветку и после ревью смержьте ее. После сборки все будет доступно по адресу `https://wirenboard.com`.