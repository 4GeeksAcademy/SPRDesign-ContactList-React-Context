import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { ContactCard} from "../component/ContactCard";

export const Home = () => (
	<div className="text-center mt-3 central-container">
		<div>Your Contacts
			
		</div>
		
		<div className="text-center mt-5">
			
			<Link to="/AddContact" className="btn btn-success navbar-button">Add Contact</Link>


		</div>
		
	</div>
);

