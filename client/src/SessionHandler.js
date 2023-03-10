export default class SessionHandler {
	constructor() {
		this.authenticated = this.getUserStatus();
	}

	saveCurrentUser(currentUser) {
		sessionStorage.setItem(
			"currentUser",
			JSON.stringify(currentUser)
		);
	}

	deleteCurrentUser() {
		sessionStorage.removeItem("currentUser");
	}

	getUserStatus() {
		const userString =
			sessionStorage.getItem("currentUser");
		const user = JSON.parse(userString);
		return user ? true : false;
	}

	isAuthenticated() {
		return this.authenticated;
	}
}
