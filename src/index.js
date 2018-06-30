var express = require('express');
var consig = require('consign');
var PORT = process.env.port || 3000;

var app = express();
consig()
    .include("src/libs/config.js")
    .then("src/db.js")
    .then("src/libs/middlewares.js")
    .then("src/routes")
    .then("src/libs/boot.js")
    .into(app)