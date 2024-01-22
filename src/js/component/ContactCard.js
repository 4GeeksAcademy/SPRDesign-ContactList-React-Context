import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ContactCard = ({ contact }) => {
  const { full_name, email, address, phone } = contact;

  return (
    <div className="contact-card">
      <h2>{full_name}</h2>
      <p>Email: {email}</p>
      <p>Dirección: {address}</p>
      <p>Teléfono: {phone}</p>
    </div>
  );
};

export default ContactCard;
