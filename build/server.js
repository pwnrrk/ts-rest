"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var web_1 = __importDefault(require("./app/libs/web"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
process.on("unhandledRejection", function (error) {
    console.trace(error);
});
process.on("uncaughtException", function (error) {
    console.trace(error);
});
var web = new web_1.default();
web.start();
