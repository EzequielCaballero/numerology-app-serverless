'use strict';
const pug = require('pug');

exports.getTemplate = (type, data) => {
    return pug.renderFile('./src/templates/index.pug', { content: contentSelector(type, data) });
}

const contentSelector = (type, data) => {
    switch(type){
        case "contact":
        return pug.renderFile(`./src/templates/components/content/${type}.pug`, {
            lang: data.lang,
            username: data.username,
            usermail: data.from,
            message: data.message.text
        });
        case "result":
        return pug.renderFile(`./src/templates/components/content/${type}.pug`, {
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