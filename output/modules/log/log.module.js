"use strict";
exports.__esModule = true;
var fs = require('fs');
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.sendStartMessage = function () {
        var date = new Date();
        var dateToString = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
        var fileName = "logs/log-" + dateToString + ".log";
        fs.appendFileSync(fileName, date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - \u0431\u043E\u0442 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\n");
    };
    Logger.prototype.sendMessage = function (username, message) {
        var date = new Date();
        var dateToString = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
        var fileName = "logs/log-" + dateToString + ".log";
        fs.appendFileSync(fileName, date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " - " + username + ": " + message + "\n");
    };
    return Logger;
}());
exports.Logger = Logger;
