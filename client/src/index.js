import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import {
	createStore,
	applyMiddleware,
	compose,
} from "redux";

import App from "./App";
import reducers from "./reducers";

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducers,
	composeEnhancers(applyMiddleware())
);

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<GoogleOAuthProvider clientId="163975834459-9n1lhgn324hsi7igre32i4doasrecrop.apps.googleusercontent.com">
		<Provider store={store}>
			<App />
		</Provider>
	</GoogleOAuthProvider>
);
