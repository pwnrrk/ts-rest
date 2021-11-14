"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __importDefault(require("../app/kernel/router"));
router_1.default.get("/book", "home@book", false);
router_1.default.get("/user", "home@user", false);
router_1.default.get("/greeting", "home@greeting", false);
router_1.default.get("*", "home@index", false);
