'use strict';
const path = require('path');
const pug = require('pug');
const TEMPLATES_PATH = (process.env.LAMBDA_TASK_ROOT) ? path.join(process.env.LAMBDA_TASK_ROOT, 'src/lambda/templates') : './src/static/templates';

exports.getTemplate = (type, data) => {
    console.log('Templates path: ' + TEMPLATES_PATH);
    return pug.renderFile(path.resolve(TEMPLATES_PATH, 'index.pug'), { content: contentSelector(type, data) });
}

const contentSelector = (type, data) => {
    switch(type){
        case "contact":
        console.log(`TEMPLATE subpath contact: ${path.resolve(TEMPLATES_PATH, `${type}.pug`)}`)
        return pug.renderFile(path.resolve(TEMPLATES_PATH, `content/${type}.pug`), {
            lang: data.lang,
            username: data.username,
            usermail: data.from,
            message: data.message.text
        });
        case "result":
        return pug.renderFile(path.resolve(TEMPLATES_PATH, `content/${type}.pug`), {
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