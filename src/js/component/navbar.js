import React from "react";
import { Link } from "react-router-dom";
import { AddContact } from "../views/addContact";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-container " >
			<Link to="/">
				<h3>Contact List</h3>
			</Link>
			<div className="text-center mt-5">

				<Link to="/AddContact" className="btn btn-success navbar-button">Add Contact</Link>


			</div>
		</nav>
	);
};


