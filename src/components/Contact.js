import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

export default function Contact() {
  return (
    <div className="container-fluid">
      <div className="container d-flex align-items-center justify-content-center contact-info">
        <div className="row">
          <div className="col-lg-12 text-center py-5 px-5 glassbg">
            <h1 className="text-white">Contact</h1>
            <br></br>
            <h3 className="text-white mt-3"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email: sapphydoyle@gmail.com</h3>
            <h3 className="text-white mt-3"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone: 07708 363700</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
