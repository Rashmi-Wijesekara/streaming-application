import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
	return (
		<div className="ui text secondary pointing menu">
			<Link to="/" className="item header">Streamers</Link>
			<div className="right menu text pointing">
				<Link to="/" className="item">All Streams</Link>
				<div className="item">Login</div>
				<div className="item">Register</div>
			</div>
		</div>
	)
}

export default Header