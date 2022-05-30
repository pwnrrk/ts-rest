export default class Command {
  commandName: string;

  constructor(commandName: string) {
    this.commandName = commandName;
  }

  async getCommand(commandName: string) {
    const command = (await import(`../commands/${commandName}.js`)).default;
    return command;
  }

  async run() {
    const command = await this.getCommand(this.commandName);
    command.excecute();
  }
}
