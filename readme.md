# VK Cup 2022

## Упрощённая веб-версия почты

### Ссылка на [приложение](https://webmail-erit.onrender.com).

## Задание:

### JS квалификация

Задача первого этапа — реализовать упрощённую веб-версию почты, проработать формат и реализовать API для взаимодействия на основе выданных данных.

#### Приложение должно:

- отображать список папок;
- отображать список писем в конкретной папке;
- отображать чтение конкретного письма.

Дизайн должен быть идентичен предоставленным макетам: https://www.figma.com/file/0m2CY3wzM29GmnGtb1nSMI/VK-Cup-2022-(1)

#### Критерии оценки:

- размер приложения: вы можете использовать любые библиотеки на клиенте, однако размер приложения — один из основных критериев;
- скорость работы;
- внимание к деталям.

#### Требования к реализации:

Мы ожидаем результат в виде ZIP-архива, содержащий исходный код, находящийся в папке src/, а также минифицированный код в папке dist/, обязательно включающий в себя файлы index.html и server.js, расположенные по пути dist/index.html и dist/server.js соответственно.

Вся статика приложения должна раздаваться сервером. Сервер должен работать на порту 3000. Открытие приложения должно быть по корневому пути сервера. Все пути должны быть относительными. Данные для тестирования вашего приложения будут автоматически подложены в папку dist/ и иметь название db.json. Гарантируется, что файл не будет превышать 1 024 Мбайт, а структура будет соответствовать выданной.

Обратите внимание, что для реализации API запрещено использовать любые библиотеки на бэкенде, кроме стандартных для Node.js версии 18.12.1 (LTS).

Исходные данные для вашего проекта: https://cloud.mail.ru/public/YjTk/bVEoz6rT8

### Отбор JS

Задача второго этапа — продолжить развивать вашу веб-версию почты.

#### Вам необходимо реализовать:

- Интернационализацию проекта.
- Темизацию проекта.
- Сделать фильтры писем (непрочитанные, с флагом, с вложениями, новые, старые и так далее).
- Ваше приложение должно быть адаптивным к различным размерам экрана. Делать адаптивность под мобильные устройства не нужно.

Дизайн должен быть идентичен предоставленным макетам:

https://www.figma.com/file/TUIFDmBXvhjeqHdIv3KW7f/VK-Cup-2022-(2)

#### Также с первого этапа приложение должно отображать:

- список папок;
- список писем в конкретной папке;
- чтение конкретного письма.

#### Критерии оценки:

- Размер приложения.
- Скорость работы.
- Внимание к деталям.
- Ожидаем, что ваше приложение будет доступно на 2 языках:
- русском,
- английском.
- Ожидаем, что в вашем приложении будет реализована смена темы.
- Также не рекомендуем использовать клиентские библиотеки, так как важны скорость и размер приложения.

#### Требования к реализации с первого этапа остаются, а именно:

1. Запрещены серверные библиотеки, например: express, fast, server-static…, кроме стандартных для Node.js версии 18.12.1 (LTS).
2. Обязана быть папка dist.
3. В этой папке должен быть файл “server.js”.
4. Сервер должен прослушивать порт 3000.
5. Вся статика должна раздаваться сервером.
6. Все урлы должны быть относительными (если API захардкожен на localhost:3000, то работа не будет оценена).
7. Папки node_modules быть не должно.

P.S. Мы в папку dist кладём файл db.json и выполняем команду node server.js, находясь в папке dist.

По результатам квалификации было немало решений, которые так или иначе отходили от этих требований, и мы просматривали такие решения. На отборочном этапе решения, которые не запускаются или как-то отходят от требований оформления результата работы, рассмотрены не будут!
