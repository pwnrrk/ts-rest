import dotenv from "dotenv";
import Web from "./app/libs/web";
import http from "http";

dotenv.config();

process.on("unhandledRejection", (error) => console.trace(error));
process.on("uncaughtException", (error) => console.trace(error));

const web = new Web();
const server = http.createServer(web.instance);

server.listen(web.port, () => {
  console.log(`Listening on http://localhost:${web.port}`);
});
