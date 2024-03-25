import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

export default function Skills() {



    const skillOne = (
        <div>
            <h3 className="text-white">Skill One</h3>
            <p className="text-white">Description of Skill One</p>
        </div>
    );

    const skillTwo = (
        <div>
            <h3 className="text-white">Skill Two</h3>
            <p className="text-white">Description of Skill Two</p>
        </div>
    );

    const skillThree = (
        <div>
            <h3 className="text-white">Skill Three</h3>
            <p className="text-white">Description of Skill Three</p>
        </div>
    );

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="container skills-sect">
                <div className="row">
                    <div className="col-lg-1">
                        <ul className="text-white">
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon"><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-11 glassbg">
                        {skillOne}
                    </div>
                </div>
            </div>
        </div>
    );
}