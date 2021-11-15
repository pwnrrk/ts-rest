import Router from "../app/kernel/router";

Router.get("/", "home@index", false);
Router.get("/hello","home@hello", false);
