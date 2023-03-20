import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream } from "../../actions";

const StreamEdit = (props) => {
	const { id } = useParams();

	const stream = useSelector((state) => {
		console.log(state)

		return state.streams[id];
	});

	useEffect(() => {
		props.fetchStream(id);
	}, [id, props]);

	return stream ? (
		<div className="ui container segment">
			{stream.title}
			<div></div>
			{stream.description}
		</div>
	) : <div>Loading...</div>
};

export default connect(null, { fetchStream })(StreamEdit);
