var exec = require('cordova/exec');

exports.scan = function (arg0, success, error) {
    exec(success, error, 'Beacon', 'scan', [arg0]);
};
