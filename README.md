# Fastify Template
[![Node.js CI](https://github.com/firmanJS/fastify-template/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/firmanJS/fastify-template/actions/workflows/nodejs.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/a4821ab8ae6ff29792a0/maintainability)](https://codeclimate.com/github/firmanJS/fastify-template/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a4821ab8ae6ff29792a0/test_coverage)](https://codeclimate.com/github/firmanJS/fastify-template/test_coverage)
[![made-with-nodejs](https://img.shields.io/badge/Made%20with-Nodejs-1f425f.svg)](https://nodejs.org)
[![made-with-fastify](https://img.shields.io/badge/Made%20with-Fastify-1f425f.svg)](https://www.fastify.io/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://github.com/firmanJS)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/firmanJS/fastify-template/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/firmanjs/fastify-template.svg)](https://github.com/firmanJS/fastify-template/releases)
[![Github all releases](https://img.shields.io/github/downloads/firmanjs/fastify-template/total.svg)](https://github.com/firmanJS/fastify-template/releases)
[![GitHub issues](https://img.shields.io/github/issues/firmanjs/fastify-template.svg)](https://github.com/firmanJS/fastify-template/issues/)
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/firmanjs/fastify-template.svg)](https://github.com/firmanJS/fastify-template/pulls/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
<div align="center"> <a href="https://fastify.io/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

**This project has 3 Domain layer**:
 * Route Layer
 * Handler Layer  
 * Repository Layer

## How To use
you must click the button use this template
- **using template** - create name of your repository
- **rename link readme** - change link repo default `github/firmanJS/fastify-template` to your repo
- **codeclimate** - you must integrate repo to codeclimate don't forget set your repo is public for integrated and in github repo settings create secret key with name `CC_TEST_REPORTER_ID` and value from code climate `REPORTER ID` in [https://codeclimate.com/](https://codeclimate.com/)

or clone this repository via https : 
```bash
https://github.com/firmanJS/fastify-template.git
```

## Core Stack
- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Fastify** - [https://www.fastify.io/](https://www.fastify.io/)

## Feature
1. * [x] **error handling**
1. * [x] **clean architecture folder**
1. * [x] **testing with jest**
1. * [x] **coverage use jest**
1. * [x] **with docker example**
1. * [x] **validiation**
1. * [x] **pagination example**
1. * [x] **custom message api response**
1. * [x] **eslint airbnb base**

## Unit testing
- **jestjs** - [https://jestjs.io/](https://jestjs.io/)

## How To run
running application three methods manually, using docker or via Makefile
* Manually :

```bash
# Copy enviroment variables from .env.sample to .env
cp .env.sample .env

# Copy Makefile sesuai environment
cp Makefile.sample Makefile

# Install package via npm or yarn
yarn install

# Run application via npm or yarn
yarn run dev

# Run migration or create migration file
yarn i -g knex

# Create migration
knex migrate:make create_users_table --cwd=src 

# Run migration
knex migrate:latest --cwd=src

# Mirate rollback
knex migrate:rollback --cwd=src

# Mirate down all
knex migrate:down --cwd=src

# Mirate down specfic file
knex migrate:down specific_file.js --cwd=src

# Create Seed
knex seed:make users_seed --cwd=src

# Run seed specific
knex seed:run --specific=$(seed-name) --cwd=src

# Run Seed
knex seed:run --cwd=src
```

* Via Docker :

```bash
# Copy enviroment variables from .env.sample to .env
cp .env.sample .env

# Copy Makefile sesuai environment
cp Makefile.sample Makefile

# Build application
docker-compose -f docker-compose-dev.yml up --build --remove-orphans --force-recreate

# Stop aplication
CTRL+C 
# then 
docker-compose -f docker-compose-dev.yml down

# After build you can run command with this
docker-compose -f docker-compose-dev.yml up 
# Or you can hide log with command
docker-compose -f docker-compose-dev.yml up -d

# Create migration in docker container
docker-compose -f docker-compose-dev.yml exec fastify-tempalte knex migrate:make create_core_users_table --cwd=src 

# Run migration in docker container
docker-compose -f docker-compose-dev.yml exec fastify-tempalte knex migrate:latest --cwd=src

# Create Seed in docker container
docker-compose -f docker-compose-dev.yml exec fastify-tempalte knex seed:make seed_users --cwd=src

# Run Seed in docker container
docker-compose -f docker-compose-dev.yml exec fastify-tempalte knex seed:run --cwd=src
```

* Via Make :

```bash
# Copy enviroment variables from .env.sample to .env
cp .env.sample .env

# Copy Makefile sesuai environment
cp Makefile.sample Makefile

# Build application
make docker-build

# Stop aplication
CTRL+C 
# then 
make docker-down

# After build you can run command with this
make docker-start
```

### fill in the copied environment earlier

```sh
#NODEJS
APP_PORT=8000
NODE_ENV=development
CLUSTER_MODE=off
JWT_SECRET_KEY=

#DB
DB_USERNAME=
DB_PASSWORD=
DB_PORT=
DB_DATABASE=
DB_DRIVER='postgres'
DB_HOST=
DB_NAME=
MONGO_URL=
```

### run with docker-compose

```sh
docker-compose up --build
```

### or run with background process

```sh
docker-compose up --build -d
```
### execution npm with container docker
```sh
# install package
docker-compose exec fastify-template npm install

# running unit testing
docker-compose exec fastify-template npm run test
```

## Project Structure
```
.
├── .github/            * all workflows github actions
├── caprover/           * for deployment in caprover
├── coverage/           * all output coverage
├── build/              * all output build source code
├── docker/             * all dockerfile
├── src/                * all source code here
  └── config/           * folder for configuration
  |  └── *.ts           * all configuration like db, awes redis etc.
  └── db/               * folder for database
  |  └── *.ts           * all database files
  └── interface/        * folder for interface
  |  └── *.ts           * all interface files
  └── lang/             * folder for language message
  |  └── *.ts           * all language message files en, id etc.
  └── middlewares/      * folder for middlewares
  |  └── *.ts           * all middlewares files
  └── repository/       * folder for repository / query logic
  |  └── *.ts           * all utility files
  └── transport/        * folder for transport / api, grpc or graphql
  |  └── *.ts           * all transport files
  └── usecase/          * folder for usecase / busines logic
  |  └── *.ts           * all usecase files
  └── utils/            * folder for utility
  |  └── *.ts           * all utility files
```

## Code Style Guides
* Guideline:
  * Use camelCase for variable name, naming function
  * Use UpperCase for Constant Variable
  * Use PascalCase for class name, models, interface
  * Use snake_case for file name 
  * Function name use Verb
  * Variable name use Noun
