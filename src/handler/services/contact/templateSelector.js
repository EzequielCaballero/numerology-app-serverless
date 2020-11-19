'use strict';
const path = require('path');
const pug = require('pug');

const INDEX_PATH = (process.env.LAMBDA_TASK_ROOT) ? path.join(process.env.LAMBDA_TASK_ROOT, './src/lambda/api') : './src/templates';
const CONTENT_PATH = (process.env.LAMBDA_TASK_ROOT) ? path.join(process.env.LAMBDA_TASK_ROOT, './src/lambda/api') : './src/templates/content';

exports.getTemplate = (type, data) => {
    console.log('Templates path: ' + path.resolve(INDEX_PATH, 'index.pug'));
    return pug.renderFile(path.resolve(INDEX_PATH, './index.pug'), { content: contentSelector(type, data) });
}

const contentSelector = (type, data) => {
    switch(type){
        case "contact":
        return pug.renderFile(path.resolve(CONTENT_PATH, './contact.pug'), {
            lang: data.lang,
            username: data.username,
            usermail: data.from,
            message: data.message.text
        });
        case "result":
        return pug.renderFile(path.resolve(CONTENT_PATH, './result.pug'), {
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