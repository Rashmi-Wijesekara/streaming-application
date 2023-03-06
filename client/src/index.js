import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<GoogleOAuthProvider clientId="163975834459-9n1lhgn324hsi7igre32i4doasrecrop.apps.googleusercontent.com">
		<App />
	</GoogleOAuthProvider>
);
