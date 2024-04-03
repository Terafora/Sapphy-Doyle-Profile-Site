import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './AnimationVariations';

export default function Contact() {

  const emailAddress = "sapphydoyle@gmail.com";

  const handleEmailClick = () => {
    window.open(`mailto:${emailAddress}`, "_blank");
  }

  return (
    <motion.div
    initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}>
    <div className="container-fluid">
      <div className="container d-flex align-items-center justify-content-center contact-info">
        <div className="row">
          <div className="col-lg-12 text-center py-5 px-5 glassbg">
            <h1 className="text-white">Contact</h1>
            <br></br>
            <h3 className="text-white mt-3 email" onClick={handleEmailClick}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> Email: {emailAddress}</h3>
            <h3 className="text-white mt-3"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone: 07708 363700</h3>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
