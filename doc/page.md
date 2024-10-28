# Создание и редактирование произвольных страниц
Для добавления произвольных страниц создайте md файл в в директории `content/pages/[locale]/FILENAME.md`, где FILENAME будем slug'ом страницы — `https://wirenboard.com/contents/FILENAME`.
У страницы необходимо указать title — из него будет формироваться главный заголовок страницы (в серой паласе над самим контентом).
В разметке можно использовать [компоненты](./components.md).
Заголовки на страницы должны начинаться со второго уровня (## Подзаголовок страницы)
Изображения, которые размешаются на странице следует хранить в папке `public/img/pages/FILENAME/my_picture.png`.

## Шаблон страницы
```
---
title: Заголовок страницы
---

## Подзаголовок
Тут текст

### ПодПодзаголовок
Тут текст
```

## Предпросмотр 
Если вы редактируете и запускаете сайт локально на компьютере, вот ссылки для предпросмотра:
* http://localhost:3000/ru/contents/FILENAME страница на русском языке
* http://localhost:3000/en/contents/FILENAME страница на английском языке

Изменения на сайт попадут после отправки пуллреквеста и вливания утверждённых изменений. Как это сделать, читайте в файле [README.md](/README.md).