import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from './AnimationVariations';
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
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white">Conflict Resolution</h3>
                <br></br>
                <p className="text-white">Throughout my career of outward facing roles, I've encountered various conflicts in the workplace, from differing opinions to personality clashes, from colleague and customer alike. Through the usage of well-honed interpersonal skills such as empathy, active listening, and mediation skills, I’ve found myself always able to cleanly navigate these situations extremely effectively. Utilizing a mix of my problem-solving and critical thinking too, allowing me to find a satisfying solution to all parties. Whether it’s to allow a positive, effective work environment between colleagues, or facilitating the solution of a problem in order for a customer to leave happy.</p>
            </div>
        </div>
    );

    const skillTwo = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">Teamwork and Interpersonal Skills</h3>
                <br></br>
                <p className="text-white">Working a myriad of roles with a diverse and different set of colleagues, teams and client bases has honed my ability to collaborate effectively and build strong relationships with colleagues and customers alike. By valuing everyone's contributions, communicating openly and clearly, fostering a positive and supportive atmosphere, I have always been able to achieve common goals and deliver successful outcomes as part of teams throughout my entire career. Always aiming to approach all who I work alongside with positivity, professionality and effectiveness, in order to allow both them and myself an environment conducive to the best outcomes. </p>
            </div>
        </div>
    );

    const skillThree = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">Effective Communication Skills</h3>
                <br></br>
                <p className="text-white">Whether it's providing feedback to team members, handling client enquiries or communicating important information to another, I have continuously refined my communications skills throughout my career. Clear, concise and succinct communication has always been key to ensuring understanding between colleagues and customers alike, crucial in establishing shared understanding to much more easily allow effective and positive outcomes in all aspects.</p>
            </div>
        </div>
    );

    const skillFour = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">Adaptability and Resilience</h3>
                <br></br>
                <p className="text-white">In the busy and ever changing work environments I’ve found myself in over my career, my adaptability and resilience have been key to overcoming the many challenges I have faced. By learning from setbacks, staying focused on goals and never allowing adversity to put me on the backfoot, I have been able to grow and thrive amongst extremely challenging situations.  Always seizing challenges as learning opportunities, in order to grow and improve constantly, gaining new insights and knowledge along the way.</p>
            </div>
        </div>
    );

    const skillFive = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">Self-Motivation and Collaboration</h3>
                <br></br>
                <p className="text-white">Making sure to take the initiative, setting lofty goals and always actively seeking opportunities to collaborate with others have all been a driving force behind my professional and personal growth. The constant ambition of personal learning and growth, alongside happily supporting my colleagues’ success, has always allowed me to achieve the goals set before me, both personal and those of teams. This has driven positive outcomes and success for myself and the teams I have been a part of.</p>
            </div>
        </div>
    );

    const skillSix = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">Time Management and Schedule Management</h3>
                <br></br>
                <p className="text-white">Having to balance multiple responsibilities and deadlines at any one time throughout my career has honed my time and schedule management skills. Working within given constraints, be they time, resource or manpower, I have through careful prioritization, organization, and effective delegation, always been able to meet goals effectively. When meeting these goals I have done so optimally, consistently and always to a high-degree of quality.</p>
            </div>
        </div>
    );

    const skillSeven = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">IT and Equipment</h3>
                <br></br>
                <p className="text-white">Across my career and personal life, I have always had a great affinity and interest in computers, having used them consistently since a very young age for all sorts of tasks. Leveraging the various capabilities of them to simplify or expedite tasks in my personal life and embracing the skills this has given me during my career.Embracing new technologies and mastering relevant tools has been a constant throughout my career. Whether it be using different software to serve customers on sale points all the way to specialist hardware, for example; the many different bespoke machines I used to test patient’s eyes during my time as an optical consultant, although this was only a small subset of my responsibilities.  Keeping updated on the latest changes, finding developmental opportunities, and leveraging technology to streamline processes, I've enhanced my efficiency, productivity, and ability to deliver results in all my roles I  have inhabited so far, as well as my daily personal tasks and interests.</p>
            </div>
        </div>
    );

    const skillEight = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">Client Service and Support</h3>
                <br></br>
                <p className="text-white">Delivering exceptional service and experiences has been foundational to my career in my client-facing roles. Using my wide portfolio of skills, alongside ensuring close attention is paid to clients needs, providing bespoke approaches or solutions and always aiming to exceed their expectations in every way, I have managed to build strong customer relationships with repeat customers. This has earned myself and the organizations I’ve worked in, the trust, loyalty and long term custom of our clients.</p>
            </div>
        </div>
    );

    const skillNine = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">Optical Health Services</h3>
                <br></br>

                <p className="text-white">After specialized training and getting hands on experience in the sector, I become responsible for assisting our patients with initial eye testing, handling and processing of personal and health based information, processing NHS and governmental claims, sales of optical products, measurements for bespoke optical products and prescriptions as well as assisting with minor ocular health concerns. By prioritizing patient care and staying updated on industry advancements and practices, I've helped improve the quality of life for many of our clients as well as provide a pleasant experience for them, while under my care. At the time, this was a sector of expertise that was out of my circle. By my learning, growth and my successful establishment of myself as a reliable and effective member of the team I was part of, I have again proven my ability to grow, adapt and acquire new skills, in many capacities.</p>
            </div>
        </div>
    );

    const skillTen = (
        <div className="glassbg skills-desc py-5 px-5 d-flex justify-content-between align-items-center">
            <div className="text-center">
                <h3 className="text-white text-center">Sales Skills</h3>
                <br></br>
                <p className="text-white">Sales skills have been a core part of my professional growth. Through practice via working my roles and the near constant ongoing education, I have refined these abilities. By ensuring the customers' needs are well understood, illustrating the virtues of the services or products offered and cultivating great customer relations; I have consistently met goals and played a key role in driving up revenue for the organizations I have been associated with.</p>
            </div>
        </div>
    );

    const selectSkill = (
        <div className="glassbg skills-desc py-5 px-5">
            <h1 className="text-white text-center">Skills</h1>
            <h2 className="text-white text-center">Please select a skill on the left.</h2>
        </div>
    ) 

return (
    <motion.div
    initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}>
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
                    <div className="my-3">{skillOne}</div>
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
    </motion.div>
    );
}