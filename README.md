# vue-cli-plugin-docker

[![npm version](https://badge.fury.io/js/vue-cli-plugin-docker.svg)](https://badge.fury.io/js/vue-cli-plugin-docker) [![Build Status](https://travis-ci.org/herrmannplatz/vue-cli-plugin-docker.svg?branch=master)](https://travis-ci.org/herrmannplatz/vue-cli-plugin-docker) [![Greenkeeper badge](https://badges.greenkeeper.io/herrmannplatz/vue-cli-plugin-docker.svg)](https://greenkeeper.io/)

> 🐳 Dockerize your vue app

## Installation

```bash
$ vue add docker
```

## Usage

It will create a `Dockerfile` and `.dockerignore` in the root of your project. [serve](https://www.npmjs.com/package/serve) is used to serve your vue single page application.

The following command will build and run the image.

```bash
$ npm run docker
```

## Contribution

In order to let semantic release do its job use `npm run commit` when committing changes.
