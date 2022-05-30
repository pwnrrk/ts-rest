import { ApiRouter as Router } from "../app/libs/router";

//General
Router.get("/", "home@index", false, "Get server status");
