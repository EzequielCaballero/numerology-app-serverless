'use strict';
const express = require('express');
const routes = require('./routes');
const serverless = require('serverless-http');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/.netlify/functions/api', routes);

module.exports = app;
module.exports.handler = serverless(app);
