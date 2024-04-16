import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './AnimationVariations';
import picture1 from '../assets/images/about-image-1.jpg';
import picture2 from '../assets/images/about-image-2.jpg';

export default function About() {
  return (
    <motion.div
    initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
      <div className="about-sect">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row gx-5 about-row">
          <div className="col-12 col-lg-3 my-5 d-flex justify-content-center">
            <img src={picture1} className="rounded about-pics" alt="Showing good communication skills in action." />
          </div>
          <div className="col-12 col-lg-9 glassbg d-flex align-items-center about-text">
            <div>
              <h2 className="text-white">About</h2>
              <br />
              <p className="text-white">
                Having worked over <strong>a decade in customer experience roles</strong>, I have developed a very tight standard for my <strong>organizational skills</strong> and quality of work performed. I have cultivated a strong nature for efficient but quality work. Always aiming to measure twice and cut once, getting the task completed correctly the first time. In the instance that this is not the reality of the end result, I work effectively to rectify the issues with limited interference to mine and others' workflow. Pairing this work ethic with my strong and adaptable <strong>interpersonal skills</strong>, I have a history of a high level of client satisfaction.
              </p>
              <p className="text-white">
                I am very comfortable and <strong>skilled with technology</strong> and the myriad of programme suites that are widely used. I have a strong affinity for both hardware and software from long time hobby and <strong>professional uses of computers and adjacent tech.</strong> Having, for example, built and maintained my own fleet of computers for the past <strong>15+ years</strong>, and being entrusted to facilitate remote maintenance with ICT Support in my last role when issues would arise.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-9 glassbg about-text">
            <div>
            <p className="text-white">
                Ever being extremely <strong>self motivated and self driven</strong>, I have always had the ability to work well with others, in a team, or as collaborating individuals, as much as I am able to work alone. This is mainly due to my personal ethic and interpersonal skills. I find myself easily able to clearly communicate with both clarity, approachability and professionality. I always listen to all input openly; good or bad, and endeavor to incorporate said input into my work with no contention with pride or conflict. Always making all efforts to maintain an approachable, professional and clear channel of communication between myself and all who I come into contact with in my work. I work on the moral of; a professional, collaborative team is an effective team, where both; myself and others succeed. Working off these qualities, I have always found myself considered by my colleagues and clients as a friendly, professional and effective person, who has been able to inspire confidence in my own work and service I am providing to others.
              </p>
              <p className="text-white">
                I now find myself on the next step of my professional and personal development journey; I am currently putting effort into <strong>learning a second language</strong> as well as looking for opportunities in order to finally <strong>pursue a career in computer tech.</strong> In the next step of my journey I will be developing my tech skills further in order to achieve this.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 my-3 d-flex justify-content-center">
            <img src={picture2} className="rounded about-pics" alt="A dimly lit laptop." />
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
