# tsed-rest-mssql

## About the project

This is a template, copy, use and change the description here to the information about the project.

This exemple is ready to use, just add a user in the database(docker) and run your tests!!


## Build setup

> **Important!** Ts.ED requires Node >= 10, Express >= 4 and TypeScript >= 3.

```batch
# install dependencies
$ npm install

# serve
$ npm run start

# build for production
$ npm run build
$ npm run start:prod
```
## Project structure

The project code base is mainly located within the `src` folder. This folder is divided in:

```
.
├── src
│   ├── config                            # Config of the whole project
│   │   ├── env
│   │   │   ├── index.ts                  # The config of all properties should be here
│   │   ├── logger
│   │   │   ├── index.ts                  # Log conf. you can do some small changes in order to setup the log
│   │   ├── typeorm
│   │   │   ├── default.config.json       # The database specification is in this file
│   ├── controllers                       # Endpoitns are here
│   ├── services                          # To call a service, add here the code
└───└── repository                        # include the code to do the crud here

```


## 3rd party libraries
- [Ts.ED](https://tsed.io) - Ts.ED is the framework used here.
- [mssql](https://hub.docker.com/_/microsoft-mssql-server) - Lib to access the SQL Server.