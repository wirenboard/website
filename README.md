# Справка по работе с сайтом Wiren Board

## Полезные ссылки

- [Описание синтаксиса](/doc/syntax.md)
- [Структура страниц](/doc/page.md)
- [Каталог товаров](/doc/catalog.md)
- [Партнёры](/doc/partners.md)
- [Интеграторы](/doc/integrators.md)
- [Вакансии](/doc/jobs.md)
- [Статьи](/doc/articles.md)
- [Видео](/doc/video.md)
- [Готовые решения](/doc/solutions.md)
- [GitHub: управление файлами](https://docs.github.com/ru/repositories/working-with-files/managing-files)
- [GitHub: ветки и пуллреквесты](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)

## Работа с Pull Request

Сам процесс создания новых веток, PR и прочего описан в документе [Процесс разработки проектов Wiren Board с использованием Git](https://github.com/wirenboard/codestyle/blob/master/workflow.md).

### Для авторов изменений
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/wirenboard/website.git
   ```
2. Создайте и переключитесь на новую ветку:
   ```bash
   git checkout -b feature/имя-ветки
   ```
3. Внесите изменения и сохраните файлы.
4. Закоммитьте правки:
   ```bash
   git add .
   git commit -m "Краткое описание изменений"
   ```
5. Отправьте ветку в удалённый репозиторий:
   ```bash
   git push origin feature/имя-ветки
   ```
6. На GitHub перейдите в **Pull requests** → **New pull request**, заполните заголовок и описание, назначьте ревьювера marketing, создайте PR.

### Для ревьюверов
1. Перейдите в раздел **Pull requests** на GitHub, найдите нужный PR.
2. Обновите локальный `main`:
   ```bash
   git checkout main
   git pull origin main
   ```
3. Загрузите и переключитесь на ветку PR:
   ```bash
   git fetch origin pull/<номер>/head:pr-<номер>
   git checkout pr-<номер>
   ```
4. Запустите локальный сервер (см. раздел Локальный запуск копии сайта) и проверьте изменения.
5. После проверки вернитесь на `main`:
   ```bash
   git checkout main
   ```

## Способы редактирования и предпросмотра

### Офлайн-редактор (VSCode)
- Установите VSCode, плагин [vscode-mdx-wb-editor-tools](https://github.com/wirenboard/vscode-mdx-wb-editor-tools) и [Git](https://git-scm.com/).
- Клонируйте репозиторий и откройте папку в VS Code.

Всю работу с Git удобно выполнять прямо в VScode ([статья по теме](https://htmlacademy.ru/blog/git/git-in-vscode)).

### Онлайн-редактирование (GitHub Web)
- Откройте файл в репозитории на GitHub.
- Нажмите «Edit», внесите правки и выберите **Commit changes** в новую ветку.
- Создайте PR прямо из веб-интерфейса.

### Локальный запуск копии сайта

#### Как пользоваться
1. Убедитесь, что Node.js и pnpm установлены.
2. В корне проекта:
   ```bash
   pnpm install
   pnpm run dev
   ```
3. Откройте браузер по адресу `http://localhost:3000` для просмотра изменений. Не забудьте ввести в адресную строку url просматриваемой страницы, например `http://localhost:3000/ru/contents/articles`.

#### Особенности
Отображаться будет только контент, без остального содержимого сайта (навигации, футера и пр.).

![Пример страницы](doc/example.png)

Чтобы посмотреть, какой версии в github соответствует текущая версия сайта, можно использовать адрес `http://localhost:3000/version.txt`.
Это также будет работать, если сайт развёрнут целиком, как на https://wirenboard.com : `https://wirenboard.com/version.txt`.

По этому адресу будет доступен такой текстовый файл:

```
Base version: unknown
External version: main@d9faf525
```

В данном примере `main@d9faf525` — это версия сайта, которая соответствует текущему состоянию в репозитории. `main` - ветка, `d9faf525` - хэш коммита.