"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = __importDefault(require("../kernel/controller"));
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Home.prototype.index = function (http) {
        return http.response.send("Server is running");
    };
    Home.prototype.greeting = function (http) {
        return http.response.send("Hello World");
    };
    Home.prototype.user = function (http) {
        var user = {
            id: 1,
            name: "Test User",
            email: "test_user@mail.com",
            user_name: "test_user"
        };
        return http.response.json(user);
    };
    Home.prototype.book = function (http) {
        var booking = {
            id: 1,
            name: "Veranda Residence Pattaya",
            address: "Na Jomtien 4"
        };
        return http.response.json(booking);
    };
    return Home;
}(controller_1.default));
exports.default = Home;
