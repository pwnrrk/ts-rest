import Router from "../app/kernel/router";

Router.get("/greeting", "home@greeting", false);
Router.get("*", "home@index", false);
