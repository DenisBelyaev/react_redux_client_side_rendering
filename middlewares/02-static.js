
// Usually served by Nginx
var serve = require('koa-static');
module.exports = serve('./');//{defer: false}

