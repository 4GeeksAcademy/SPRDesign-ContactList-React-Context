import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { ContactCard } from "../component/ContactCard";
import { Context } from "../store/appContext";

export const Home = () => {
    const { actions, store } = useContext(Context);

    return (
        <div className="text-center mt-3">
            <div className="card-container">
                {store.contacts.map((contact, index) => (
                    <ContactCard key={index} contact={contact} className="contact-card" />
                ))}
            </div>
        </div>
    );
};
