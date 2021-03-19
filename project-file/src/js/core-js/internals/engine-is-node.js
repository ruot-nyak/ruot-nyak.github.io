var classof = require('./classof-raw');
var global = require('./global');

module.exports = classof(global.process) == 'process';
