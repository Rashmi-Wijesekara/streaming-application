import {
	unstable_HistoryRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Header from './components/Header'
import history from './history'
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";
import StreamDelete from "./components/streams/StreamDelete";

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
			<Header />
				<Routes>
					<Route path="/" exact element={<StreamList />} />
					<Route
						path="/streams/new"
						exact
						element={<StreamCreate />}
					/>
					<Route
						path="/streams/edit/:id"
						exact
						element={<StreamEdit />}
					/>
					<Route
						path="/streams/delete"
						exact
						element={<StreamDelete />}
					/>
					<Route
						path="/streams/show"
						exact
						element={<StreamShow />}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
