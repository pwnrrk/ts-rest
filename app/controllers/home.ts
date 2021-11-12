import Controller from "../kernel/controller";
import {Http} from "../kernel/http";

export default class Home extends Controller {
	index(http: Http) {
		return http.response.send("Server is running");
	}
	greeting(http: Http) {
		return http.response.send("Hello World");
	}
	user(http: Http) {
		const user = {
			id: 1,
			name: "Test User",
			email: "test_user@mail.com",
			user_name: "test_user"
		};
		return http.response.json(user);
	}
}
