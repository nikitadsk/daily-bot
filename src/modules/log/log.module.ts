const fs = require('fs');

export class Logger {
  constructor() {}

  sendStartMessage() {
    const date: Date = new Date();
    const dateToString: string = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    const fileName: string = `logs/log-${dateToString}.log`;
    fs.appendFileSync(fileName, `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - бот запущен\n`);
  }

  sendMessage(username: string, message: string) {
    const date: Date = new Date();
    const dateToString: string = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
    const fileName: string = `logs/log-${dateToString}.log`;
    fs.appendFileSync(fileName, `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${username}: ${message}\n`);
  }
}