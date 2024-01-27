import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactCard = ({ contact }) => {
  const { full_name, email, address, phone } = contact;
  const { actions } = useContext(Context);

  return (
    <div className="contact-card col-xl-4 col-sm-6 mb-3">
      <div className="bg-white rounded shadow-sm py-5 px-4">
        <div className="text-center">
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
            alt=""
            width="100"
            className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
          />
          <h5 className="mb-0">{full_name}</h5>
        </div>

        <div className="row mt-3  icons-margin-left ">
          <div className="col-12">
            <div className="d-flex mb-2">
              <i className="fas fa-at mr-2 "></i>
              <p className="mb-0 text-margin-left">{email}</p>
            </div>
            <div className="d-flex mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <p className="mb-0 text-margin-left ">{address}</p>
            </div>
            <div className="d-flex mb-2">
              <i className="fas fa-mobile-alt mr-2"></i>
              <p className="mb-0 text-margin-left ">{phone}</p>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <button className="btn btn-primary" style={{ borderColor: "transparent" }}>
              <i className="far fa-edit" /> Edit
            </button>
          </div>
          <div className="col-md-6">
            <button className="btn btn-danger" style={{ borderColor: "transparent" }} onClick={() => actions.deleteContacts(contact.id)}>
              <i className="fas fa-trash-alt" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


