import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { fetchStream } from "../../actions";
import { useParams } from "react-router-dom";
import flv from "flv.js";

const StreamShow = (props) => {
	const videoRef = React.createRef();

	const { id } = useParams();

	const stream = useSelector((state) => {
		return state.streams[id];
	});

	useEffect(() => {
		props.fetchStream(id);
	}, [id, props]);

	return (
		stream && (
			<div>
				<video ref={videoRef} style={{width: '100%'}} controls />
				<div className="ui header">{stream.title}</div>
				<div className="ui content">
					{stream.description}
				</div>
			</div>
		)
	);
};

export default connect(null, { fetchStream })(StreamShow);
