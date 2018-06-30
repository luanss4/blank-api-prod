var express = require('express');
var consig = require('consign');

var app = express();
consig()
    .include("src/libs/config.js")
    .then("src/db.js")
    .then("src/libs/middlewares.js")
    .then("src/routes")
    .then("src/libs/boot.js")
    .into(app);
