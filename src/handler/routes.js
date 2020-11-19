'use strict';
const { Router } = require('express');
const { contact } = require('./controllers/contact');
const { tracker } = require('./controllers/tracker');

const router = Router();

router.post('/send/email', contact);

router.post('/send/log', tracker);

router.all('/*', (req, res, next) => {
	res.status(404).send('Wrong request.');
});

module.exports = router;
