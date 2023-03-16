import React from 'react'
import {connect} from 'react-redux'
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom'

const StreamEdit = (props) => {
	const {id} = useParams()

	const stream = useSelector(state => {
		return state.streams[id];
	})

	return (
		<div className="ui container segment">
			{stream.title}
			<div></div>
			{stream.description}
		</div>
	)
}

export default connect(null, {})(StreamEdit)
