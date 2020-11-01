'use strict';

exports.getLocalDatetime = () => {
    const tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    const localISOTime = (new Date(Date.now() - tzoffset)).toISOString();
    return {
        date: localISOTime.slice(0, 10),
        time: localISOTime.slice(10, 19),
    }
}

exports.encodeEmail = (email) => {
    return email.replace(/[.|#|$|[|\]]/g,",");
}