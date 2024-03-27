import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCircle } from '@fortawesome/free-solid-svg-icons';
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
                return selectSkill;
    }}

    const skillOne = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill One</h3>
            <p className="text-white">Description of Skill One</p>
        </div>
    );

    const skillTwo = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Two</h3>
            <p className="text-white">Description of Skill Two</p>
        </div>
    );

    const skillThree = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Three</h3>
            <p className="text-white">Description of Skill Three</p>
        </div>
    );

    const skillFour = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Four</h3>
            <p className="text-white">Description of Skill Four</p>
        </div>
    );

    const skillFive = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Five</h3>
            <p className="text-white">Description of Skill Five</p>
        </div>
    );

    const skillSix = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Six</h3>
            <p className="text-white">Description of Skill Six</p>
        </div>
    );

    const skillSeven = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Seven</h3>
            <p className="text-white">Description of Skill Seven</p>
        </div>
    );

    const skillEight = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Eight</h3>
            <p className="text-white">Description of Skill Eight</p>
        </div>
    );

    const skillNine = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Nine</h3>
            <p className="text-white">Description of Skill Nine</p>
        </div>
    );

    const skillTen = (
        <div className="glassbg skills-desc py-5 px-5">
            <h3 className="text-white text-center">Skill Ten</h3>
            <p className="text-white">Description of Skill Ten</p>
        </div>
    );

    const selectSkill = (
        <div className="glassbg skills-desc py-5 px-5">
            <h1 className="text-white text-center">Skills</h1>
            <h2 className="text-white text-center">Please select a skill on the left.</h2>
        </div>
    ) 

return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="container skills-sect">
                <div className="row">
                    <div className=" col-lg-12 d-none d-lg-block"></div>
                <div className="row">
                    <ul className="text-white skill-list d-none d-lg-flex">
                        <li className="pulsating-icon" onClick={() => handleSkillChange(1)}><FontAwesomeIcon icon={skill === 1 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(2)}><FontAwesomeIcon icon={skill === 2 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(3)}><FontAwesomeIcon icon={skill === 3 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(4)}><FontAwesomeIcon icon={skill === 4 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(5)}><FontAwesomeIcon icon={skill === 5 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(6)}><FontAwesomeIcon icon={skill === 6 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(7)}><FontAwesomeIcon icon={skill === 7 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(8)}><FontAwesomeIcon icon={skill === 8 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(9)}><FontAwesomeIcon icon={skill === 9 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                        <li className="pulsating-icon" onClick={() => handleSkillChange(10)}><FontAwesomeIcon icon={skill === 10 ? faCircle : faCircleDot}></FontAwesomeIcon></li>
                    </ul>
                </div>
                <div className="col-lg-12 py-5 px-5 d-flex justify-content-center align-items-center d-none d-lg-block">
                    {renderSkill()}
                </div>
                <div className="col-md-12 py-5 px-5 d-lg-none mt-0">
                    <div>{skillOne}</div>
                    <div className="my-3">{skillTwo}</div>
                    <div className="my-3">{skillThree}</div>
                    <div className="my-3">{skillFour}</div>
                    <div className="my-3">{skillFive}</div>
                    <div className="my-3">{skillSix}</div>
                    <div className="my-3">{skillSeven}</div>
                    <div className="my-3">{skillEight}</div>
                    <div className="my-3">{skillNine}</div>
                    <div className="my-3">{skillTen}</div>
                </div>
            </div>
        </div>
    </div>
    );
}