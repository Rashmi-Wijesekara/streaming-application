import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const GoogleAuth = (props) => {
	
	const [user, setUser] = useState({
		email: "",
		name: "",
		pictureUrl: "",
		id: ""
	});

	useEffect(() => {
		if (props.isSignedIn === null) props.signOut();
	}, [props]);

	// useEffect(() => {
	// 	console.log(user);
	// }, [user]);

	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			// console.log(tokenResponse);

			const { data } = await axios.get(
				"https://www.googleapis.com/oauth2/v3/userinfo",
				{
					headers: {
						Authorization:
							"Bearer " + tokenResponse.access_token,
					},
				}
			);

			// console.log(data);
			props.signIn(data.sub);

			setUser({
				email: data.email,
				name: data.name,
				pictureUrl: data.picture,
				id: data.sub
			});
		},
	});

	const logout = () => {
		props.signOut();
		setUser({
			email: "",
			name: "",
			pictureUrl: "",
		});
	};

	const renderAuthButton = () => {
		if (props.isSignedIn === null) {
			return null;
		} else if (props.isSignedIn) {
			return (
				<button
					onClick={() => logout()}
					className="ui red google button"
				>
					<i className="google icon" />
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					onClick={login}
					className="ui red google button"
				>
					<i className="google icon" />
					Sign In
				</button>
			);
		}
	};

	return <>{renderAuthButton()}</>;
};

const mapStateToProps = (state) => {
	// console.log(state);

	return {
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, {
	signIn,
	signOut,
})(GoogleAuth);
