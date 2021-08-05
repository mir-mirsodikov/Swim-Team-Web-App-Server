<h1>Swim Team Web App</h1>

# Overview
Full-stack web application for the oversight and management of a swim team.

The best way for a user to interact with a client was to build a web application.

## Technologies

### Server Side
- Node
- Express
- TypeScript
- MongoDB
- Passport
  - Passport Local
- JSON Web Token

I used TypeScript because of its rigid structure and exceptional error handling. The server was then built using Node and Express because of its easy integration. MongoDB was used because of its power and cloud hosting. 

I had never worked with authentication and authorization in the past and this was the main reason that I worked on this project. After lots of research, I found that Passport Local strategy fit best for what I was trying to accomplish. With Passport, I used JSON Web Tokens for the authorization on the client side.

### Client Side
- Vue
- Vue Router
- Vuex
- Axios

The client was built using Vue. I have had a lot of experience with Vue in the past, but this was the first time I worked with it using the CLI. With this, I also learned and implemented Vue Router and Vuex. Due to the fact that the website would be spread out over several pages, I had to implement a routing system. Vuex provided me with a great state management across my files.

# Installation

## Server Side
Navigate into the server folder.
```
cd server
```

Install all necessary dependencies: 
```
npm install
```

For development purposes: 
```
npm run dev
```

For building and compiling: 
```
npm run build
```

For running the compiled code: 
```
npm run start
```

## Client Side

Project setup
```
npm install
```

Compiles and hot-reloads for development
```
npm run serve
```

Compiles and minifies for production
```
npm run build
```

Lints and fixes files
```
npm run lint
```