import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';

export default function Skills() {

    const [skill, setSkill] = useState(0);

    const handleSkillChange = (selectedSkill) => {
        setSkill(selectedSkill);
    };

    const renderSkill = () => {
        switch (skill) {
            case 1:
                return skillOne;
            case 2:
                return skillTwo;
            case 3:
                return skillThree;
            case 4:
                return skillFour;
            case 5:
                return skillFive;
            case 6:
                return skillSix;
            case 7:
                return skillSeven;
            case 8:
                return skillEight;
            case 9:
                return skillNine;
            case 10:
                return skillTen;
            default:
                return(
                    <div>
                        <h1 className="text-white">Skills</h1>
                        <p className="text-white">Please select a skill</p>
                    </div>
                );
    }}

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

    const skillFour = (
        <div>
            <h3 className="text-white">Skill Three</h3>
            <p className="text-white">Description of Skill Three</p>
        </div>
    );

    const skillFive = (
        <div>
            <h3 className="text-white">Skill Three</h3>
            <p className="text-white">Description of Skill Three</p>
        </div>
    );

    const skillSix = (
        <div>
            <h3 className="text-white">Skill Six</h3>
            <p className="text-white">Description of Skill Six</p>
        </div>
    );

    const skillSeven = (
        <div>
            <h3 className="text-white">Skill Seven</h3>
            <p className="text-white">Description of Skill Seven</p>
        </div>
    );

    const skillEight = (
        <div>
            <h3 className="text-white">Skill Eight</h3>
            <p className="text-white">Description of Skill Eight</p>
        </div>
    );

    const skillNine = (
        <div>
            <h3 className="text-white">Skill Nine</h3>
            <p className="text-white">Description of Skill Nine</p>
        </div>
    );

    const skillTen = (
        <div>
            <h3 className="text-white">Skill Ten</h3>
            <p className="text-white">Description of Skill Ten</p>
        </div>
    );

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="container skills-sect">
                <div className="row">
                    <div className="col-lg-1">
                        <ul className="text-white">
                            <li className="pulsating-icon" onClick={() => handleSkillChange(1)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(2)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(3)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(4)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(5)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(6)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(7)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(8)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(9)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                            <li className="pulsating-icon" onClick={() => handleSkillChange(10)}><FontAwesomeIcon icon={faCircleNotch}></FontAwesomeIcon></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-lg-11 glassbg">
                        {renderSkill()}
                    </div>
                </div>
            </div>
        </div>
    );
}