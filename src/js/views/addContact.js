import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const AddContact = () => {
  
    const [contactData, setContactData] = useState({
        full_name: "",
        email: "",
        address: "",
        phone: "",
    });

    
    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();

        navigate("/ContactCard");
    };

    return (
        <div className="contact-card-container mt-0">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="full_name" value={contactData.full_name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={contactData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" name="address" value={contactData.address} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" name="phone" value={contactData.phone} onChange={handleChange} required />
                </div>

                

                <button type="submit" lang="en">{contactData.id ? "Update Contact" : "Add Contact"}</button>
            </form>
        </div>
    );
};
