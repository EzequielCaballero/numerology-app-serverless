'use strict';
const path = require('path');
const pug = require('pug');

const getTemplate = (type, data) => {
    return pug.renderFile(path.resolve(__dirname, './index.pug'), { content: contentSelector(type, data) });
}

const contentSelector = (type, data) => {
    switch(type){
        case "contact":
        return pug.renderFile(path.resolve(__dirname, './content/contact.pug'), {
            lang: data.lang,
            username: data.username,
            usermail: data.from,
            message: data.message.text
        });
        case "result":
        return pug.renderFile(path.resolve(__dirname, './content/result.pug'), {
            lang: data.lang,
            username: data.username,
            usermail: data.to.split('@')[0],
            message: data.message.text,
            userbirth: data.message.birth,
            url: data.message.url
        });
        default:
            throw new Error(`Template type: '${type}' not found.`);
    }
}

module.exports = {
    getTemplate
};