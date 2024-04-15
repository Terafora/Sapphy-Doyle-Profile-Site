import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import SapphyDoyleCV from '../assets/Sapphy-Doyle-CV.pdf';
import image from "../assets/images/SapphyDoyleProfilePic.jpg";
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './AnimationVariations';

export default function Home() {
  const [showTick, setShowTick] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = SapphyDoyleCV;
    link.download = 'Sapphy-Doyle-CV.pdf';
    link.click();

    setShowTick(true);
    setShowBanner(true);

    setTimeout(() => {
      setShowTick(false);
      setShowBanner(false);
    }, 5000);
  };

  return (
    <motion.div
    initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
      <div className={`banner ${showBanner ? 'show' : ''}`}>
        CV download successful!
      </div>
      <div className="home container d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12 col-lg-6 my-5 d-flex justify-content-center">
            <img src={image} className="rounded home-pic" alt="Sapphy Doyle" />
          </div>
          <div className="col-lg-6 glassbg d-flex align-items-center">
            <div className="text-center">
              <h1 className="text-white">Sapphy Doyle</h1>
              <br></br>
              <p className="text-white">
              I am an extremely driven individual with long experience and well developed skills in client experience roles of myriad variety. With recent experience in the medical-optical; service and sales field. I have well established tech skills and a strong affinity for both hardware and software from long time hobby and professional uses of computers and adjacent tech. My ambition is now to grow this well cultivated collection of skills with my personal drive and hunger for learning to pursue and grow a career in tech.
              </p>
              {showTick ? (
                <h3 className="mt-5 resume-download">
                  <FontAwesomeIcon icon={faCheck} /> Download complete
                </h3>
              ) : (
                <h3 className="text-white mt-5 resume-download " onClick={handleDownload}>
                  <FontAwesomeIcon icon={faDownload} /> Download my resume
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
