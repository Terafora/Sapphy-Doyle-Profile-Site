import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import './History.css';

export default function Jobs() {

    const [history, setHistory] = useState(0);

    const handleHistoryChange = (selectedHistory) => {
        setHistory(selectedHistory);
    };

    const renderHistory = () => {
        switch (history) {
            case 1:
                return historyOne;
            case 2:
                return historyTwo;
            case 3:
                return historyThree;
            case 4:
                return historyFour;
            default:
                return selectHistory;
    }}

    const historyOne = (
        <div className="glassbg py-5 px-5">
            <h2 className="text-white text-center">Optical Consultant</h2>
            <h3 className="text-white text-center">Specsavers - Stone <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></h3>
            <ul className="text-white">
                <li>Testing, processing and caring for patients in preparation for eye tests, consults and medical
    appointments with our optometrists; in a swift timely manner. On average, 24-32 patients for processing
    and testing, to then be allocated to 1 of 3 Optometrist clinics. As well as processing and filing of any
    relevant NHS/Government funded claims.</li>
                <li>Providing excellent support to patients in a one-on-one capacity with choosing and informing on
    products and services post appointment, as well as any unappointed walk in customers. Usually resulting
    in 15-30 personal full dispenses per shift.</li>
                <li>Striving to provide careful assistance to patients with ocular health concerns with ‘Eye Health Concern’
    triaging. Applying my knowledge and skills to ensure patients receive all needed care for health concerns,
    whilst ensuring a swift, comfortable and stress free process for the patient.</li>
            </ul>
        </div>
    );

    const historyTwo = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Two</h3>
            <p className="text-white">Description of Skill Two</p>
        </div>
    );

    const historyThree = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Three</h3>
            <p className="text-white">Description of Skill Three</p>
        </div>
    );

    const historyFour = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Four</h3>
            <p className="text-white">Description of Skill Four</p>
        </div>
    );

    const selectHistory = (
        <div className="glassbg skills-desc py-5 px-5">
            <h1 className="text-white text-center">Skills</h1>
            <h2 className="text-white text-center">Please select a piece of work from the top.</h2>
        </div>
    )

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="container skills-sect">
                <div className="row">
                    <div className="col-lg-12 d-none d-lg-block">
                </div>
                <div className="row">
                    <ul className="text-white history-timeline">
                        <li className="pulsating-icon" onClick={() => handleHistoryChange(1)}><FontAwesomeIcon icon={history === 1 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleHistoryChange(2)}><FontAwesomeIcon icon={history === 2 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleHistoryChange(3)}><FontAwesomeIcon icon={history === 3 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleHistoryChange(4)}><FontAwesomeIcon icon={history === 4 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                    </ul>
                </div>
                <div className="col-lg-11 py-5 px-5 d-flex justify-content-center align-items-center d-none d-lg-block">
                    {renderHistory()}
                </div>
                <div className="col-md-12 py-5 px-5 d-lg-none mt-0">
                    <div>{historyOne}</div>
                    <div className="my-3">{historyTwo}</div>
                    <div className="my-3">{historyThree}</div>
                    <div className="my-3">{historyFour}</div>
                </div>
            </div>
        </div>
    </div>
    );
}