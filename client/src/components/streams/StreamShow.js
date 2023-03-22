import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { fetchStream } from "../../actions";
import { useParams } from "react-router-dom";
import flv from "flv.js";

const StreamShow = (props) => {
	const videoRef = React.useRef();
	const player = React.useRef()

	const { id } = useParams();

	const stream = useSelector((state) => {
		return state.streams[id];
	});

	useEffect(() => {
		fetchStream(id);

		return () => {
			if (player.current) {
				player.current.destroy();
			}
		};
	}, [id]);

	useEffect(() => {
		if (player.current || !stream) {
			return;
		}

		player.current = flv.createPlayer({
			type: "flv",
			url: `http://localhost:8000/live/${id}.flv`,
		});
		player.current.attachMediaElement(videoRef.current);
		player.current.load();

		return () => {
			player.current.destroy();
		};
	}, [id, stream]);

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
