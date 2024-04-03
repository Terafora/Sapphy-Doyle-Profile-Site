import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCircle, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'framer-motion';
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
            <h3 className="text-white text-center"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Specsavers - Stone</h3>
            <h3 className="text-white text-center">July 2021 to December 2022</h3>
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
<div className="glassbg py-5 px-5">
            <h2 className="text-white text-center">Bartender</h2>
            <h3 className="text-white text-center"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Heineken Franchise Pub - Stone</h3>
            <h3 className="text-white text-center">December 2019 to March 2020</h3>
            <ul className="text-white">
                <li className="">Serving patrons various beverages and foods with pleasure and offering friendly polite conversation
during appropriate periods.</li>
                <li>Maintaining a clean, organised bar and patron space in order for the establishment to be hygienic,
welcoming and safe. Stocking and maintaining the fast moving stock from storerooms between duties.
</li>
                <li>Setting up and maintaining the various pieces of bar equipment and ensuring swift reestablishment
of supply when barrels run dry.</li>
            </ul>
        </div>    );

    const historyThree = (
<div className="glassbg py-5 px-5">
            <h2 className="text-white text-center">Customer Assistant</h2>
            <h3 className="text-white text-center"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Wm Morrisons Supermarkets - Stone</h3>
            <h3 className="text-white text-center">July 2015 to December 2019</h3>
            <ul className="text-white">
                <li> Carefully handling customer complaint and conflict issues on the complaints desk. Ensuring all product,
service and cost issues raised by customers were resolved swiftly and with highest attainable customer
satisfaction. Using interpersonal skills in order to deescalate any customer conflict that can arise during
daily operations, striving to reverse any negative interaction in order for the customer to leave satisfied.</li>
                <li>Operating the store adjoined petrol fueling station , often in a lone capacity. Ensuring all through traffic
of around 300-600 vehicles a shift was able to access our myriad services smoothly and swiftly, serving
on foot customers. Facilitating the safe operation of the facility by ensuring all systems and machines
are running safe and optimally, securing the premises as needed, and processing and securing large
amounts of funds on a day to day basis.</li>
                <li>Happily and effectively offering assistance to customers and colleagues alike as I moved around my
myriad daily roles</li>
            </ul>
        </div>    );

    const historyFour = (
<div className="glassbg py-5 px-5">
            <h2 className="text-white text-center">Customer Assistant</h2>
            <h3 className="text-white text-center"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Premier - Staffordshire</h3>
            <h3 className="text-white text-center">November 2012 to July 2015</h3>
            <ul className="text-white">
                <li> Tending to customers in a friendly and personable manner, as the main clientele were local and regular.
Exceeding efforts to maintain good relations with each one in order to maintain a happy and consistent
customer base.</li>
                <li> Consistently maintain a clean, tidy and well stocked store. In order for our customers to have the ease
of use of our facilities and keep a clean and professional visage.</li>
                <li>Ensuring stocked inventory, reordering as needed and securing of funds, and safely closing and
securing the premises after daily operations.</li>
            </ul>
        </div>    );

    const selectHistory = (
        <div className="glassbg skills-desc py-5 px-5">
            <h1 className="text-white text-center">Work History</h1>
            <h2 className="text-white text-center">Please select a role from above.</h2>
        </div>
    )

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="container skills-sect">
                <div className="row">
                    <div className=" col-lg-12 d-none d-lg-block">
                    </div>
                    <div className="row">
                        <ul className="text-white history-timeline d-none d-lg-flex">
                            <li className="pulsating-icon" onClick={() => handleHistoryChange(1)}><FontAwesomeIcon icon={history === 1 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleHistoryChange(2)}><FontAwesomeIcon icon={history === 2 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleHistoryChange(3)}><FontAwesomeIcon icon={history === 3 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleHistoryChange(4)}><FontAwesomeIcon icon={history === 4 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        </ul>
                    </div>
                    <div className="col-lg-12 py-5 px-5 d-flex justify-content-center align-items-center d-none d-lg-block">
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