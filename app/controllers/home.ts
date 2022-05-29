import Controller from "../libs/interfaces/controller";

const home: Controller = {
  index(req, res) {
    res.json({ message: "Server is running" });
  },
  hello(req, res) {
    res.json({ message: "Hello from TS-Rest Test" });
  },
};

export default home;
