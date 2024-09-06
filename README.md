# audioshop-admin

Административная панель для управления аудиомагазином.

## Описание

Это приложение представляет собой административную панель для управления аудиомагазином, разработанную с использованием React и React Admin. Оно предоставляет интерфейс для управления товарами, включая их просмотр, редактирование и удаление.

## Основные функции

- Аутентификация пользователей
- Просмотр списка товаров
- Детальный просмотр информации о товаре
- Удаление товаров

## Технологии

- React
- React Admin
- TypeScript
- Vite
- Axios

## Установка

Для установки зависимостей проекта выполните:

```sh
npm install
```

## Разработка

Для запуска приложения в режиме разработки используйте:

```sh
npm run dev
```

## Сборка для продакшена

Для сборки приложения в продакшен-режиме выполните:

```sh
npm run build
```

## Authentication

The included auth provider should only be used for development and test purposes.
You'll find a `users.json` file in the `src` directory that includes the users you can use.

You can sign in to the application with the following usernames and password:

- janedoe / password
- johndoe / password

## Аутентификация

В проекте используется тестовый провайдер аутентификации. Для входа в систему используйте следующие учетные данные:

- janedoe / password
- johndoe / password

## Структура проекта

- `src/`: Исходный код приложения
- `components/`: React-компоненты
- `dataProvider.ts`: Провайдер данных для взаимодействия с API
- `authProvider.ts`: Провайдер аутентификации

## Дополнительные скрипты

- `npm run type-check`: Проверка типов TypeScript
- `npm run lint`: Проверка и исправление стиля кода
- `npm run format`: Форматирование кода

## Примечание

Этот проект предназначен для демонстрационных целей и может требовать дополнительной настройки для использования в продакшене.
