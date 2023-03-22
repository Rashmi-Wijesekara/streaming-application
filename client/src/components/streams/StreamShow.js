import React, {useEffect} from 'react'
import {connect, useSelector} from 'react-redux'
import {fetchStream} from '../../actions'
import {useParams} from 'react-router-dom'

const StreamShow = (props) => {
	const {id} = useParams()

	const stream = useSelector((state) => {
		return state.streams[id];
	});


	useEffect(() => {
		props.fetchStream(id)
	}, [id, props])
	
	return stream && (
		<div>
			<div className="ui header">{stream.title}</div>
			<div className="ui content">{stream.description}</div>
		</div>
	)
}

export default connect(null, {fetchStream})(StreamShow)