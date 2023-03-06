import React, { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleAuth = () => {
	const [isSignedIn, setIsSignedIn] = useState(null);
	const [user, setUser] = useState({
		email: "",
		name: "",
		pictureUrl: "",
	});

	useEffect(() => {
		setIsSignedIn(false);
	}, []);

	useEffect(() => {
		console.log(user)
	}, [user])

	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			console.log(tokenResponse);

			const {data} = await axios.get(
				"https://www.googleapis.com/oauth2/v3/userinfo",
				{
					headers: {
						Authorization:
							"Bearer " + tokenResponse.access_token,
					},
				}
			);

			console.log(data);
			
			setIsSignedIn(true)
			setUser({
				email: data.email,
				name: data.name,
				pictureUrl: data.picture,
			});
		},
	});

	const logout = () => {
		setIsSignedIn(false);
		setUser({
			email: "",
			name: "",
			pictureUrl: "",
		});
	}

	const renderAuthButton = () => {
		if (isSignedIn === null) {
			return null;
		} else if (isSignedIn) {
			return (
				<button
					onClick={()=> logout()}
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

export default GoogleAuth;
