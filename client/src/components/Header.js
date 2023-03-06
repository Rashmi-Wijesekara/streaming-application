import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/streamers-logo.png";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
	return (
		<div className="ui secondary pointing menu aligned middle">
			<Link to="/" className="item">
				<img
					src={logoImage}
					alt="Streamers Logo"
					className=""
					style={{ margin: 0, padding: 0, width: "80px" }}
				/>
			</Link>
			<div className="right menu">
				<Link to="/" className="item">
					All Streams
				</Link>
				<Link to="/" className="item">
					<GoogleAuth />
				</Link>
			</div>
		</div>
	);
};

export default Header;
