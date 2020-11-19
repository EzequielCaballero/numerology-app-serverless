'use strict';
const express = require('express');
const cors = require('cors');
const routes = require('./handler/routes');
const serverless = require('serverless-http');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/.netlify/functions/api', routes);

module.exports = app;
module.exports.handler = serverless(app);
