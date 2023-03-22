import React, { useEffect } from "react";
import Modal from "../Modal";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = (props) => {
	const { id } = useParams();

	const stream = useSelector((state) => {
		return state.streams[id];
	});

	useEffect(() => {
		props.fetchStream(id);
	}, [id, props]);

	const actions = (
		<>
			<Link to="/" className="ui button">
				Cancel
			</Link>
			<button onClick={()=> props.deleteStream(id)} className="ui button negative">Delete</button>
		</>
	);

	return (
		stream && (
			<Modal
				title="Delete Stream"
				content="Are you sure you want to delete this stream?"
				actions={actions}
				onDismiss={() => history.push("/")}
				stream={stream}
			/>
		)
	);
};

export default connect(null, { fetchStream, deleteStream })(
	StreamDelete
);
