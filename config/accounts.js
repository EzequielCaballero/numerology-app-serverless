'use strict';
require('dotenv').config();

const Email_TestAccount = {
	host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'cristal.johnston@ethereal.email',
        pass: 'NwnjQ5Eu9e2rUtPWY2'
    }
}
const Email_RealAccount = {
	host: process.env.MAIL_host,
	port: process.env.MAIL_port,
	auth: {
		user: process.env.MAIL_user,
		pass: process.env.MAIL_pass
	}
};

exports.API_TOKEN = process.env.API_token;

exports.MAIL_ACCOUNT = process.env.NODE_ENV !== 'production' ? Email_TestAccount : Email_RealAccount;

exports.FIREBASE_ACCOUNT = {
	apiKey: process.env.FIREBASE_apikey,
	authDomain: process.env.FIREBASE_authDomain,
	databaseURL: process.env.FIREBASE_databaseURL,
	projectId: process.env.FIREBASE_projectId,
	storageBucket: process.env.FIREBASE_storageBucket,
	messagingSenderId: process.env.FIREBASE_messagingSenderId,
	appId: process.env.FIREBASE_appId,
	measurementId: process.env.FIREBASE_measurementId
};
