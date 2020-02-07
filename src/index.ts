import { ContextMessageUpdate } from "telegraf";
import { Logger } from './modules/log/log.module';
import { TOKEN } from './utils/consts';
import { User } from './models/user.interface';

const Telegraf = require('telegraf');
const users: User[] = require('../users.json');
const fs = require("fs");
 
const logger = new Logger();
const bot = new Telegraf(TOKEN);

console.log(users);

bot.start((ctx: ContextMessageUpdate) => {
  ctx.reply(`Добрый день, @${ctx.chat.username}. Что желаете сделать?`);
  logger.sendMessage(ctx.from.username, 'вызвана команда START');
});

bot.help((ctx: ContextMessageUpdate) => {
  const user: User = {
    chatId: ctx.chat.id,
    nickname: ctx.from.username
  }

  logger.sendMessage(user.nickname, 'вызвана регистрация');

  if (!JSON.stringify(users).includes(JSON.stringify(user))) {
    users.push(user);
    fs.writeFileSync('users.json', JSON.stringify(users));
    logger.sendMessage(user.nickname, 'зарегистрировался');
    ctx.reply('Вы зарегистрировались');
  } else {
    ctx.reply('Вы уже зарегистрированы');
  }
})

bot.launch();
logger.sendStartMessage();
