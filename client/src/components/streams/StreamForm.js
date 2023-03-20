import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
	renderInput({ input, label, meta }) {
		return (
			<div className="field">
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				{meta.error &&
					(meta.touched || meta.submitFailed) && (
						<div className="ui pointing label basic red tiny">
							{meta.error}
						</div>
					)}
			</div>
		);
	}

	onSubmit = (formValues) => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form segment very padded"
			>
				<Field
					name="title"
					component={this.renderInput}
					label="Enter Title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>

				<button className="ui button primary">
					Submit
				</button>
			</form>
		);
	}
}

const validate = (formValues) => {
	let errors = {};

	if (!formValues.title) {
		errors.title = "You must enter a title";
	}

	if (!formValues.description) {
		errors.description = "You must enter a description";
	}

	return errors;
};

export default reduxForm({
	form: "streamForm",
	validate: validate,
})(StreamForm);

