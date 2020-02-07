const fs = require('fs');

export class Json {

  filePath: string;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  readJson(): string {
    return fs.readFileSync(this.filePath);
  }

  writeToJson(userList): void {
    fs.writeFileSync(this.filePath)
  }

}