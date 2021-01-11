import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { nameFieldValidations, emailFieldValidations } from '../../helpers'
import PropTypes from 'prop-types';
import './styles.scss';

const UserDataForm = ({ closeModal, message = true, name = true }) => {
    const [errors, setErrors] = useState({ name: false, email: false });

    const handleSubmit = (event) => {
        event.preventDefault();
        const nameResult = nameFieldValidations(event.target.user_name.value);
        const emailResult = emailFieldValidations(event.target.user_email.value);
        if(nameResult && emailResult)
        {
            emailjs.sendForm('contact_service', 'contact_form', event.target, 'user_iHcAhH2HFpHfkspecFfaT')
            .then(() => {
                closeModalHandler();
            }, (error) => {
                console.error(error.text);
            });
        }
        else
        {
            if(!nameResult)
            {
                setErrors(prevState => {
                    return { ...prevState, name: true }
                });
            }
            if(!emailResult)
            {
                setErrors(prevState => {
                    return { ...prevState, email: true }
                });
            }
        }
      };
      const handleOnChange = () => {
        setErrors({ name: false, email: false });
      }
      const closeModalHandler = () => {
        closeModal(false);
      }

    return (
    <div id="modal" className="modal-window" id="modal-window">
        <div className="modal_content" id="modal_content">
            <div className="modal-header" id="modal-header">
                <h1 className="header-title">¡Responderé a la brevedad posible!</h1>
                <span className="header-close" id="close" onClick={closeModalHandler}>&times;</span>
            </div>
            <form id="contact_form" className="contact-form" onSubmit={handleSubmit}>
                {name &&
                    <div className="contactFormField">
                        <label>Nombre</label>
                        <input type="text" name="user_name" id="user_name" onChange={handleOnChange} />
                        {errors.name && <span className="error-label">Revisa este campo</span>}
                    </div>
                }
                <div className="contactFormField">
                    <label>Email</label>
                    <input type="text" name="user_email" id="user_email" onChange={handleOnChange} />
                    {errors.email && <span className="error-label">Revisa este campo</span>}
                </div>
                {message &&
                    <div className="contactFormField">
                        <label>Mensaje<span className="textarea-label-span"> - opcional</span></label>
                        <textarea cols="20" rows="2" name="message" id="message"/>
                    </div>
                }
                <input type="submit" id="button" value="Enviar" />
            </form>
        </div>
    </div>
    )
};

UserDataForm.propTypes = {
    closeModal: PropTypes.func,
    message: PropTypes.bool,
    name: PropTypes.bool,
};

export default UserDataForm;
