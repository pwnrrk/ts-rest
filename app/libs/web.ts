import express from "express";
import { Express } from "express";
import process from "process";
import bodyParser from "body-parser";
import { Routes, Route } from "./router";
import "../../routes/router";
import path from "path";
import verifiyToken from "./jwt";
import cors from "cors";

export default class Web {
	instance: Express;
	port: string;
	constructor() {
		this.instance = express();
		this.port = process.env.PORT ? process.env.PORT : "3000";
		this.instance.use(bodyParser.urlencoded({ extended: false }));
		this.instance.use(bodyParser.json());
		this.instance.use(cors());
		this.instance.use(express.static(path.join(path.resolve(),"public")));
		this.useRoute(Routes);
	}
	useRoute(routes: Route[]) {
		routes.forEach(route => {
			if (route.authenticate) {
				this.instance[route.method as keyof Express](
					route.routePath,
					verifiyToken,
					async (request: express.Request, response: express.Response) => {
						const commandClass = (
							await import(`../controllers/${route.classPath}.js`)
						).default;
						const command = new commandClass();
						command[route.functionName]({ request, response });
					}
				);
			} else {
				this.instance[route.method as keyof Express](route.routePath, async (request: express.Request, response: express.Response) => {
					const commandClass = (
						await import(`../controllers/${route.classPath}.js`)
					).default;
					const command = new commandClass();
					command[route.functionName]({ request, response });	
				})
			}
		})
	}
	start() {
		this.instance.listen(this.port, () => {
			console.log(`Listening http://localhost:${this.port}`);
		})
	}
}