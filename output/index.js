"use strict";
exports.__esModule = true;
var log_module_1 = require("./modules/log/log.module");
var consts_1 = require("./utils/consts");
var Telegraf = require('telegraf');
var users = require('../users.json');
var fs = require("fs");
var logger = new log_module_1.Logger();
var bot = new Telegraf(consts_1.TOKEN);
console.log(users);
bot.start(function (ctx) {
    ctx.reply("\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C, @" + ctx.chat.username + ". \u0427\u0442\u043E \u0436\u0435\u043B\u0430\u0435\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C?");
    logger.sendMessage(ctx.from.username, 'вызвана команда START');
});
bot.help(function (ctx) {
    var user = {
        chatId: ctx.chat.id,
        nickname: ctx.from.username
    };
    logger.sendMessage(user.nickname, 'вызвана регистрация');
    if (!JSON.stringify(users).includes(JSON.stringify(user))) {
        users.push(user);
        fs.writeFileSync('users.json', JSON.stringify(users));
        logger.sendMessage(user.nickname, 'зарегистрировался');
        ctx.reply('Вы зарегистрировались');
    }
    else {
        ctx.reply('Вы уже зарегистрированы');
    }
});
bot.launch();
logger.sendStartMessage();
