# cari-hati-backend

CariHati is a tinder clone project  
[Frontend repository](https://github.com/glennprays/cari-hati-ui)

## Getting Started

### PREPARATION (IMPORTANT)

### Docker

Make sure you have docker installed

### Mongodb Atlas

If you don't have MongoDB Atlas Account [create here]('https://mongodb.com/atlas)

### AWS & S3 Account

You have to get AWS access and secret key also S3 bucket config. You can check it in `.env.example`

### Xendit Account

### Firebase Account

### ENV File

-   `.env`: This is main env file, you have to create the file base on `.env.example` before run in production
-   `.env.local`: This file used for development and production, please create the file base on `.env.local.example` before run

### CREDENTIALS

-   `firebase private key`: generate your firebase private by follow [this](https://firebase.google.com/docs/admin/setup?authuser=1#initialize_the_sdk_in_non-google_environments), then store private key into `FIREBASE_PRIVATE_KEY`, `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL` in .env file
-   Insert your email credentials in .env.local

### Prisma

Before started, you have to generate the prisma schema and push it into your database

```bash
# generate only
$ npm run prisma:generate
# generate and push schema to database
$ npm run prisma:push
```

### Development Mode

In development, it need a few stack, so you have to run the stack before run the program in development. Make sure you have already installed Docker and Docker Compose

```bash
# run development stack
$ npm run dev-stack

# stop development stack
$ npm run dev-stack:stop
```

### Installation

```bash
$ npm install
```

### Seeder

```bash
# for app structural data
$ npm run seed:structural
# for dummy data
$ npm run seed:dummy
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
