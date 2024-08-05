# Wiren Board website
Данный репозиторий содержит в себе контент для сайта https://wirenboard.com.

## Инструкции редакторам
Для работы с md файлами локально можно использовать [плагин](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc) для VSCode.
Это позволит вам предварительно просматривать контент прямо в редакторе. Однако для более точного представления конечного вида контента рекомендуется запускать сайт локально. Ниже приведены инструкции по запуску сайта.

- [Как добавить партнера](./doc/partners.md);
- [Как добавить интегратора](./doc/integrators.md);
- [Как добавить вакансию](doc/vacancies);
- [Как добавить ссылку на статью](./doc/articles.md);
- [Дополнительные компоненты](./doc/components.md).

## Как запустить сайт локально
Запуск сайта в браузере позволит вам видеть все внесенные изменения в реальном времени — страница будет обновляться после каждого сохранения файла. Для этого выполните следующие шаги:


- Клонируйте этот репозиторий:
  ```
  https://github.com/wirenboard/website.git
  ```
- Установите NodeJS. Скачайте и установите [NodeJS](https://nodejs.org/en/download/prebuilt-installer) для вашей операционной системы.
- Установите пакетный менеджер [pnpm](https://pnpm.io/installation). В процессе установки подвтерждайте предложенные варианты.
- Установите зависимости проекта. Перейдите в корневую директорию проекта и выполните команду:
    ```bash
    pnpm install
    ```
- Запустите локальный сервер, выполнив команду:
    ```bash
    pnpm run dev
    ```

Просмотр будет доступен в браузере по адресу `http://localhost:3000`. Не забудьте ввести в адресную строку url редактируемой страницы, например `http://localhost:3000/ru/pages/articles`.

Отображаться будет только контент, без остального содержимого сайта (навигации, футера и пр.).

![Пример страницы](doc/example.png)
## Деплой в продакшен

Для деплоя изменений на продакшен выполните следующие шаги:

1. Создайте пул реквест в ветку main вашего репозитория.
2. Пройдите процесс ревью и смержьте изменения.
3. После успешной сборки изменения будут доступны по адресу https://wirenboard.com.