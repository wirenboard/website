# Синтаксис

Мы используем Markdown в нотации mdx, который позволяет расширить возможности разметки.

В верхней части каждого файла между знаками `---` находится раздел [front-matter](https://content.nuxt.com/usage/markdown#front-matter). Про это надо просто знать, в документации приведены примеры этого раздела для каждого файла.

Список файлов для редактирования и перечень инструментов вы найдёте в файле [README.md](/README.md).

## Используемые теги оформления

Рекомендуем придерживаться принятого стиля, так исходный текст будет однообразным.

### Заголовки
```mdx
# Заголовок 1
## Заголовок 2
### Заголовок 3
#### Заголовок 4
```
По возможности, делайте как можно меньшую вложенность в статье. В большинстве случаев с лихвой хватает заголовков 1…2.

### Абзацы
Текст разделяется на абзацы, если между блоками текста есть пустая строка:
```mdx
Первый абзац текста.

Второй абзац текста.
```

### Выделение текста
```mdx
_курсив_
**жирный**
~~зачеркнутый~~

**это работает и с целым предложением**
```
При изменении текста в онлайн редакторе на Github работают горячие клавиши:
- Ctrl+I — курсив
- Ctrl+B — жирный.

### Цитата
```mdx
> Текст цитаты
```
### Блок кода
Чтобы вывести вна странице код, надо заключить его в косые кавычки ` ``` ` (над буквой Ё).
````
```
function test() {
  console.log("текст");
}
```
````

### Ссылка
```mdx
[Заголовок внешней ссылки](https://URL)
[Заголовок относительной ссылки](/doc/components.md)
```

### Картинка
```mdx
![Альтернативный текст)](/img/image.png)
```

### Списки
Маркированный:
```mdx
Заголовок списка:
- подпункт 1;
- подпункт 2.
```

Нумерованный:
```mdx
Заголовок списка:
1. Пункт 1.
2. Пункт 2.
```

Вложенный:
```mdx
Заголовок списка:
- пункт 1;
  - подпункт 1;
  - подпункт 2;
- пункт 2.
```
### Дополнительные компоненты
Псевдосинтаксис:
```mdx
::component_name
Содержимое компонента.
::
```
[Список компонентов для редакторов](/doc/components.md)

### Экранирование символов
Иногда нужно, чтобы введённые символы отображались «как есть» и не учитывались интерпретатором как символы разметки, сделать это можно добавив левый слеш перед символом:

```mdx
Пример \*\*выражения между звездочками\*\*
```