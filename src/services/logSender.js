'use strict';
const { getLocalDatetime, encodeEmail } = require("../helpers/formatValues");
const firebase = require('firebase/app');
require('firebase/database');
const { API_TOKEN, FIREBASE_ACCOUNT } = require('../../config/accounts');

if (!firebase.apps.length) firebase.initializeApp(FIREBASE_ACCOUNT);
const app = firebase.app();

exports.logSender = (data, header) => {
	return new Promise((resolve, reject) => {
		if (header.token === API_TOKEN) {
			const dateKey = getLocalDatetime();
			const contactType = header['origin-type'];
			const userKey = contactType === 'contact' ? encodeEmail(data.from) : encodeEmail(data.to);

			app
				.database()
				.ref(`sender-detail/${contactType}/${dateKey.date}/${userKey}`)
				.push({
					lang: data.lang,
					from: data.from,
					to: data.to,
					subject: data.subject,
					username: data.username,
					message: data.message
				})
				.then(() => {
					app.database().ref(`contact-list/${userKey}`).child(dateKey.date).push({time: dateKey.time, type: contactType})
					.then(()=> resolve(`New contact registered.`))
					.catch((error)=> reject(`Contact not saved: ${error}`));
				})
				.catch((error) => reject(`Log not saved: ${error}`));
		} else {
			reject('auth');
		}
	});
};
