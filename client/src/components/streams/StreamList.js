import React from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import {fetchStreams} from '../../actions'

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams()
	}

	// only the user that created a stream can delete or edit that stream
	renderAdmin(stream) {
		if(stream.userId === this.props.currentUserId)
			return (
				<div className="right floated content">
					<button className="ui button primary">Edit</button>
					<button className="ui button negative">Delete</button>
				</div>
			)
	}

	renderCreate() {
		if(this.props.isSignedIn){
			return (
				<div style={{textAlign: 'right'}}>
					<Link
						to="/streams/new"
						className="ui button primary"
					>
						Create Stream
					</Link>
				</div>
			);
		}
	}

	renderList() {
		return this.props.streams.map(stream => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						<div className="header">{stream.title}</div>
						<div className="description">
							{stream.description}
						</div>
					</div>
				</div>
			);
		})
	}

	render() {
		console.log("inside streamList render ===>")
		console.log(this.props)
		return (
			<div className="">
				<h2>Streams</h2>
				<div className="ui segment very padded relax divided list">{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	}
}

export default connect(mapStateToProps, {fetchStreams})(StreamList)