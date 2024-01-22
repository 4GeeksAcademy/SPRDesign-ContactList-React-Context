import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-container " >
			<Link to="/">
				<h3>Contact List</h3>
			</Link>
			
		</nav>
	);
};


