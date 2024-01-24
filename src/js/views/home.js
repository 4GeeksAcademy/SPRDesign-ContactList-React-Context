import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Home = () => {
	const { actions, store } = useContext(Context)
	const contacts = store.contacts

	useEffect (() => {
		actions.getContacts()

	}, [contacts])

	return (
		<div className="text-center mt-3 central-container">
			<div>
				<ul>
					{store.contacts.map((contact, index) => {
						return (
							<li key={index}>
								<ContactCard contact={contact} />
							</li>
						)
					})}
				</ul>

			</div>

			<div className="text-center mt-5">

				<Link to="/AddContact" className="btn btn-success navbar-button">Add Contact</Link>


			</div>

		</div>

	)


};

