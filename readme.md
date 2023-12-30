![Israel](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/500px-Flag_of_Israel.svg.png)

# PMRV-template 🇮🇱

Welcome to the PMRV-template repository!

- **P - Prisma**
- **M - MongoDB**
- **R - React**
- **V - Vite**

This is a monorepo that includes both the client and server-side components of an application.

## Overview 🇮🇱

This project is built using the following technologies:

### Client Side 🇮🇱

- **Vite:** A fast build tool that focuses on speed and efficiency.
- **React:** A popular JavaScript library for building user interfaces.
- **TypeScript:** A superset of JavaScript that adds static typing to the language.
- **Styled Components:** A styling library for React that utilizes tagged template literals.

### Server Side 🇮🇱

- **Node.js:** A JavaScript runtime for server-side development.
- **Express:** A web application framework for Node.js.
- **Prisma:** A modern database toolkit for TypeScript and Node.js.
- **MongoDB:** A NoSQL database for storing and retrieving data.
- **Cors:** A middleware for handling Cross-Origin Resource Sharing.
- **Bcryptjs:** A library for hashing passwords.
- **Dotenv:** A zero-dependency module for loading environment variables.
- **Jsonwebtoken:** A library for creating JSON Web Tokens.

### Docker 🇮🇱

The repository includes a Dockerfile for setting up a local development environment with MongoDB and Prisma database.
(you need docker insatlled on your machine)

### Getting Started 🇮🇱

```bash
cd client && npm install
cd ../server && npm install
```

notice the .env.template file containg the url of the docker mongo ,

```env
DATABASE_URL="mongodb://{MONGO_INITDB_ROOT_USERNAME}:{MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/{dbName}?authSource=admin"
```

those 'variables' needs to correspond to the values in the docker-compose file.

in the docker-compose file you need to set the container name

```yaml
container_name: my_mongo_container
```

to start the container , in the server directory run

```bash
npm run start-db
```

and also dont forget to set the .env file , you can the .env.template file

### server side utills 🇮🇱

ive also included basic functionality for server side,
with utills like with jwt and encryption
