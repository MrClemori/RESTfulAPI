RESTful API для блогу
Це RESTful API для створення, зберігання, редагування та видалення постів в блозі. Для розробки API використовувався фреймворк Express.js та база даних MongoDB.

Встановлення
- Склонуйте репозиторій
- Встановіть залежності за допомогою команди npm install
- Запустіть сервер за допомогою команди npm start
- Використання
API дозволяє створювати, отримувати, редагувати та видаляти пости.

Доступні ендпойнти:

// POSTS

GET /api/posts : отримати список всіх постів
GET /api/posts/:id : отримати пост по його id
POST /api/posts : створити новий пост

	"author": type: string, обов'язково,
    	"title": type: string, обов'язково,
    	"content": type: string, обов'язково,
    	"picture": type: file

PUT /api/posts :редагувати пост
DELETE /api/posts/:id удалити пост по його id

// USERS

GET /users : отримати список всіх користувачів
GET /users:id : отримати користувача по його id
POST /register : реєстрація нового користувача
	
	"name": type: string, обов'язково,
    	"login": type: string, обов'язково,
    	"password": type: string, обов'язково

//////////////////////////
ENG
A RESTful API for blogging
It is a RESTful API for creating, storing, editing and deleting blog posts. The Express.js framework and the MongoDB database were used to develop the API.

Installation
- Clone the repository
- Install the dependencies using the npm install command
- Start the server using the npm start command
- Using
The API allows you to create, retrieve, edit and delete posts.

Available endpoints:

// POSTS

GET /api/posts : get a list of all posts
GET /api/posts/:id : get a post by its id
POST /api/posts : Create a new post

"author": type: string, required,
    "title": type: string, required,
    "content": type: string, required,
    "picture": type: file

PUT /api/posts : edit a post
DELETE /api/posts/:id delete a post by its id

// USERS

GET /users : get a list of all users
GET /users:id : get a user by his id
POST /register : registration of a new user

	"name": type: string, required,
    	"login": type: string, required,
    	"password": type: string, required