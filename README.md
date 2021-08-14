<h1>High School Sports Team Web App Server</h1>

# Overview
Server side application for the management, communication, and progress of high school sports teams.

# Tech Stack
- Node
- Express
- TypeScript
- MongoDB
- Passport
  - Passport Local
- JSON Web Token

I used TypeScript because of its rigid structure and exceptional error handling. The server was then built using Node and Express because of its easy integration. MongoDB was used because of its power and cloud hosting. 

I had never worked with authentication and authorization in the past and this was the main reason that I worked on this project. After lots of research, I found that Passport Local strategy fit best for what I was trying to accomplish. With Passport, I used JSON Web Tokens for the authorization on the client side.

# Test Driven Development
This was the first of my experience with test drive development. I set up Mocha and Chai as my testing frameworks. Paired with some mock components, I was able to get the testings I wanted. 

# Clean Architecture
My very first exposure to project architecture was clean architecture. After lots of research and examples, I was able to structure my code to abide by clean architecture.

A more detailed explanation of it can be found [here](architecture.md).


# Installation
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