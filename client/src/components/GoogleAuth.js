import React, { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import SessionHandler from '../SessionHandler'

const GoogleAuth = (props) => {
	const login = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			const { data } = await axios.get(
				"https://www.googleapis.com/oauth2/v3/userinfo",
				{
					headers: {
						Authorization:
							"Bearer " + tokenResponse.access_token,
					},
				}
			);
			
			const currentUser = {
				email: data.email,
				name: data.name,
				pictureUrl: data.picture,
				id: data.sub,
			};
			
			props.signIn(data.sub, currentUser);
		},
	});

	useEffect(() => {
		const sessionHandler = new SessionHandler()
		const userStatus = sessionHandler.isAuthenticated();
		if (props.isSignedIn === null && userStatus) {
			const currentUser = sessionHandler.getCurrentUser();
			props.signIn(currentUser.id, currentUser)
		}
		else if(props.isSignedIn === null && !userStatus){
			props.signOut();
		}
	}, [login, props]);

	const logout = () => {
		props.signOut();
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
	return {
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, {
	signIn,
	signOut,
})(GoogleAuth);
