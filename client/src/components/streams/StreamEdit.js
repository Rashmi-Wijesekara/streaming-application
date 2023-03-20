import React, { useEffect } from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

const StreamEdit = (props) => {
	const { id } = useParams();

	const stream = useSelector((state) => {
		return state.streams[id];
	});

	const onSubmit = (formValues) => {
		props.editStream(id, formValues)
	};

	useEffect(() => {
		props.fetchStream(id);
	}, [id, props]);

	return stream ? (
		<div>
			<h3>Edit a Stream</h3>
			<StreamForm initialValues={_.pick(stream, 'title', 'description')} onSubmit={onSubmit} />
		</div>
	) : (
		<div>Loading...</div>
	);
};

export default connect(null, { fetchStream, editStream })(
	StreamEdit
);
