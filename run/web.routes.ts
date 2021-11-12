import Router from "../app/kernel/router";

Router.get("/user", "home@user",false);
Router.get("/greeting", "home@greeting", false);
Router.get("*", "home@index", false);
