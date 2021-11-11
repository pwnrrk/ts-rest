import Controller from "../kernel/controller";
import {Http} from "../kernel/http";

export default class Home extends Controller {
	index(http: Http) {
		return http.response.send("Server is running");
	}
	greeting(http: Http) {
		return http.response.send("Hello World");
	}
}
