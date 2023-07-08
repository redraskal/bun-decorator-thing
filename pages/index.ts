import { Route } from "gateway";
import { decorator } from "../decorator";

export default class implements Route {
	@decorator() // ReferenceError goes away when commenting this out
	data() {
		console.log("works");
	}
};
