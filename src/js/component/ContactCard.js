import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useActionData, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export const ContactCard = ({ contact }) => {
  const { full_name, email, address, phone } = contact;

  const { actions, store } = useContext(Context)

  return (
    <div className="contact-card col-xl-3 col-sm-6 mb-5">
      <div className="bg-white rounded shadow-sm py-5 px-4"><img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
        <h5 className="mb-0">{full_name}</h5>
        <p>Email: {email}</p>
        <p>Adress: {address}</p>
        <p>Phone: {phone}</p>
      </div>
      <div className="col-md-3 iconos">
        <button onClick={() => actions.deleteContacts(contact.id) }><i className="fas fa-trash-alt" /></button>
        
        <i className="far fa-edit" />
      </div>

    </div>





  );
};


