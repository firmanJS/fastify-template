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

**Default branch** :
 * default template clean no db configuration
 
**More Feature Checkout the branch** :
 * [x] `main` no db configuration
 * [ ] `feature/knex` using knex orm default postgre
 * [ ] `feature/mongo` using mongoose orm

This project has 3 Domain layer :
 * Repository Layer
 * Usecase Layer  
 * Transport Layer

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
- **Express** - [https://www.fastify.io/](https://www.fastify.io/)

## Feature
1. * [x] **error handling**
1. * [x] **clean architecture folder**
1. * [x] **testing with jest**
1. * [x] **coverage use jest**
1. * [x] **with docker example**
1. * [x] **validiation, use express-valdator**
1. * [x] **pagination example**
1. * [x] **custom message api response**
1. * [x] **eslint airbnb base**

## Unit testing
- **jestjs** - [https://jestjs.io/](https://jestjs.io/)

## How To run

### copy environment variable

```sh
cp .env-sample .env
```

### run manualy

* via yarn or npm :

```sh
# install package
npm install or yarn install

#  running app
npm run dev or yarn dev

# running unit tetsing
npm run test or yarn test
```

* via make :

```sh
# start aplication with docker
make docker-start 

# stop docker container
make docker-stop 

# remove docker container
make docker-down 
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
docker-compose exec boillerplate-typescript npm install

# running unit testing
docker-compose exec boillerplate-typescript npm run test
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
