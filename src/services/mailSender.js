'use strict';
const nodemailer = require('nodemailer');
const { API_TOKEN, MAIL_ACCOUNT } = require('../../config/accounts');
const { getTemplate } = require('../templates/selector');

const transporter = nodemailer.createTransport(MAIL_ACCOUNT);

exports.mailSender = (data, header) => {
	return new Promise((resolve, reject) => {
		if (header.token === API_TOKEN) {
			transporter
				.sendMail({
					from: data.from,
					to: data.to,
					subject: data.subject,
					text: data.message.text,
					html: getTemplate(header['origin-type'], data)
				})
				.then((info) => {
					resolve(`Message sent: ${info.messageId} | ${nodemailer.getTestMessageUrl(info)}`);
				})
				.catch((error) => reject(`Mail not send: ${error}`));
		} else {
			reject('auth');
		}
	});
};
