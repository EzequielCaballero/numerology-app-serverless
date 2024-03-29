'use strict';
const { mailSender } = require('../services/contact/mailSender');

exports.contact = (req, res, next) => {
	try {
		console.info(`POST Send email -> DATA: ${JSON.stringify(req.body)}`);
		if (req.headers.token && req.headers["origin-type"]) {
			mailSender(req.body, req.headers)
				.then((info) => {
					res.status(200).send({status: 200, message: info});
					console.info(info);
				})
				.catch((err) => {
					if (err === 'auth') res.status(403).send({status: 403, message: 'Access not granted.'});
					else res.status(500).send({status: 500, message: err});
					console.error(err);
				});
		} else {
			res.status(401).send({status: 401, message: 'Unauthorized access.'});
			console.error('Unauthorized access.');
		}
	} catch (error) {
		res.status(500).send({status: 500, message: 'Internal server error.'});
		console.error(`Internal server error -> ${error}`);
	}
};
