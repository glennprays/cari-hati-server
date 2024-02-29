# cari-hati-backend
CariHati is a tinder clone project  
[Frontend repository](https://github.com/glennprays/cari-hati-ui)

## Getting Started
### PREPARATION (IMPORTANT)
### ENV File
- `.env`: For production, you have to create the file base on `.env.template` before run in production
- `.env.dev`: For development phase, no need to create it because it already exist
- `.env.local`: This file used for development and production, please create the file base on `.env.local.example` before run
### CREDENTIALS
-  `firebase private key`: generate your firebase private by follow [this](https://firebase.google.com/docs/admin/setup?authuser=1#initialize_the_sdk_in_non-google_environments), and store your private key at `./src/common/firebase/credentials/service-account-file.json`

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

### Database migration
```bash
# Run the migration
$ npm run migration:run

# Revert migration
$ npm run migration:revert
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

