import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './History.css';

export default function Jobs() {

    const [education, setEducation] = useState(0);

    const handleEducationChange = (selectedEducation) => {
        setEducation(selectedEducation);
    };

    const renderEducation = () => {
        switch (education) {
            case 1:
                return educationOne;
            case 2:
                return educationTwo;
            case 3:
                return educationThree;
            default:
                return selectEducation;
    }}

    const educationOne = (
        <div className="glassbg py-5 px-5">
            <h2 className="text-white text-center">Level 2 in Business</h2>
            <h3 className="text-white text-center"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> NCSC - Stafford</h3>
            <h3 className="text-white text-center">June 2020 to December 2022</h3>
        </div>
    );

    const educationTwo = (
<div className="glassbg py-5 px-5">
            <h2 className="text-white text-center">Level 2 in Electrical Engineering</h2>
            <h3 className="text-white text-center"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> NCSC - Stafford</h3>
            <h3 className="text-white text-center">September 2011 to February 2013</h3>
        </div>    );

    const educationThree = (
<div className="glassbg py-5 px-5">
            <h2 className="text-white text-center">Level 2 in ICT and Business</h2>
            <h3 className="text-white text-center"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Stoke-on-Trent</h3>
            <h3 className="text-white text-center">September 2010 to March 2011</h3>
        </div>    );

    const selectEducation = (
        <div className="glassbg skills-desc py-5 px-5">
            <h1 className="text-white text-center">Education History</h1>
            <h2 className="text-white text-center">Please select education from above.</h2>
        </div>
    )

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="container skills-sect">
                <div className="row">
                    <div className=" col-lg-12 d-none d-lg-block"></div>
                <div className="row">
                    <ul className="text-white history-timeline d-none d-lg-flex">
                        <li className="pulsating-icon" onClick={() => handleEducationChange(1)}><FontAwesomeIcon icon={education === 1 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleEducationChange(2)}><FontAwesomeIcon icon={education === 2 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleEducationChange(3)}><FontAwesomeIcon icon={education === 3 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                    </ul>
                </div>
                <div className="col-lg-11 py-5 px-5 d-flex justify-content-center align-items-center d-none d-lg-block">
                    {renderEducation()}
                </div>
                <div className="col-md-12 py-5 px-5 d-lg-none mt-0">
                    <div>{educationOne}</div>
                    <div className="my-3">{educationTwo}</div>
                    <div className="my-3">{educationThree}</div>
                </div>
            </div>
        </div>
    </div>
    );
}