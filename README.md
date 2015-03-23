# Пример проекта на koa.js #


## Что необходимо сделать дома? ##

- **Использовать** текущую схему работы проекта (через файл **index.js**)
- Прописать в файле **config/default.js** секцию отвечающую за подключение к `memcached`
- Создать свою обертку для модуля работающего с `memcached`.
  + Она должна находиться в папке **helpers**
  + У неё должны быть следующие методы: **get**, **set**, **delete**
  + Сделать так, чтобы эти методы можно было вызывать при помощи `yield`
  + Для реализации данной задачи можно использовать обещания ([Q](https://github.com/kriskowal/q)) или функции (в формате, который поддерживает [co](https://github.com/tj/co])
  + Конфиги для подключения к `memcached` необходимо получать при помощи модуля [config](https://github.com/lorenwest/node-config)
- Создать новый контроллер `memcachedController`
  + Реализовать в нем методы: **getAction**, **postAction** и **deleteAction**, которые будут получать, добавлять и удалять данные в `memcached`, соответственно
  + Если в **postAction** удалось добавить данные в `memcached` - возвращать статус **201 Created**. В противном случае - **400 Bad Request**
  + Если в **deleteAction** удалось удалить данные из `memcached` - возвращать статус **204 No Content**. В противном случае - **400 Bad Request**
- В файле **app/routes/index.js** описать правила роутинга для `GET`, `POST` и `DELETE` методов
  
## Полезные ссылки ##

1. Консольные команды для работы с [memcached](http://dev.mysql.com/doc/mysql-ha-scalability/en/ha-memcached-interfaces-libmemcached-utilities.html)


