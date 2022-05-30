import express from "express";
import process from "process";
import bodyParser from "body-parser";
import { ApiRoutes, ViewRoutes, Route } from "./router";
import "../../routes/api";
import "../../routes/view";
import path from "path";
import verifiyToken from "./jwt";
import cors from "cors";
import morgan from "morgan";

export default class Web {
  instance: express.Express;
  port: string;
  apiRouter: express.IRouter;
  viewRouter: express.IRouter;
  constructor() {
    this.instance = express();
    this.apiRouter = express.Router();
    this.viewRouter = express.Router();
    this.port = process.env.PORT ? process.env.PORT : "3000";
    this.instance.use(bodyParser.urlencoded({ extended: false }));
    this.instance.use(bodyParser.json());
    this.instance.use(cors());
    this.instance.use(morgan("combined"));
    this.instance.use(express.static(path.join(path.resolve(), "public")));
    this.instance.use("/api", this.apiRouter);
    this.instance.use("/", this.viewRouter);
    this.useRoute(ApiRoutes, this.apiRouter);
    this.useRoute(ViewRoutes, this.viewRouter);
  }
  handleMethod(route: Route) {
    const fun = async (
      request: express.Request,
      response: express.Response
    ) => {
      try {
        const command = (await import(`../controllers/${route.classPath}.js`))
          .default;
        command[route.functionName](request, response);
      } catch (error) {
        return response.status(500).json(error);
      }
    };
    return fun;
  }
  useRoute(routes: Route[], target: express.IRouter) {
    routes.forEach((route) => {
      if (route.authenticate) {
        (target[route.method as keyof express.IRouter] as CallableFunction)(
          route.routePath,
          verifiyToken,
          this.handleMethod(route)
        );
      } else {
        (target[route.method as keyof express.IRouter] as CallableFunction)(
          route.routePath,
          this.handleMethod(route)
        );
      }
    });
  }
  start() {
    this.instance.listen(this.port, () => {
      console.log(`Listening http://localhost:${this.port}`);
    });
  }
}
