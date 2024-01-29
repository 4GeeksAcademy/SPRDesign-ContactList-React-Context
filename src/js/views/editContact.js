import React, { useState, useEffect, useContext } from "react";
import PropTypes from 'prop-types';
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();

    // Estado local que almacena la información del contacto actual
    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        address: "",
        phone: ""
    });

    // Efecto de lado que se ejecuta cuando cambian las dependencias (params.id y store.contacts)
    useEffect(() => {
        // Encuentra el contacto en la tienda que coincide con el ID de los parámetros de la URL
        const contactData = store.contacts.find((c) => c.id === parseInt(params.id));
        
        // Si se encuentra el contacto, actualiza el estado local con su información
        if (contactData) {
            setContact(contactData);
        }
    }, [params.id, store.contacts]);

    // Manejador de eventos para cambios en los campos de entrada del formulario
    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    // Manejador de eventos para enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Llama a la acción de editar contacto con el ID y la información del contacto
        actions.editContact(params.id, contact);

        // Navega de regreso a la página principal
        navigate("/");
    };

    // Formulario de edición de contacto
    return (
        <div className="contact-card-container mt-0">
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="full_name"
                        value={contact.full_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={contact.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Botón que muestra "Update Contact" o "Add Contact" dependiendo de si contact.id existe */}
                <button type="submit"> 
                    {contact.id ? "Update Contact" : "Add Contact"}
                </button>
            </form>
        </div>
    );
};

// Propiedades esperadas para el componente EditContact
EditContact.propTypes = {
    match: PropTypes.object,
};
