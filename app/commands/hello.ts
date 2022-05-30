import Command from "../libs/interfaces/command";

const hello: Command = {
  excecute() {
    console.log("Hello command");
  },
};

export default hello;
