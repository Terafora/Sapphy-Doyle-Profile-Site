import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';
import './Home.css';
import SapphyDoyleCV from '../assets/Sapphy-Doyle-CV.pdf';

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
    <>
    {showBanner && (
      <div className="banner">
        CV download successful!
      </div>
    )}
    <div className="home container d-flex align-items-center justify-content-center">
      <div className="row">
        <div className="col-lg-6">
          <img src="https://fakeimg.pl/400x600?font=bebas" alt="placeholder" />
        </div>
        <div className="col-lg-6 glassbg">
          <h1 className="text-white">Sapphy Doyle</h1>
          <br></br>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at accumsan nibh. Curabitur consequat vestibulum eros, suscipit luctus tellus congue non. Pellentesque a dui mauris. Donec pharetra at nunc vel condimentum. Phasellus non sodales erat, non auctor magna. Nam nec ante non nibh pretium pharetra. Nunc a ante sit amet leo imperdiet porttitor. Praesent arcu mi, sollicitudin sit amet egestas quis, rhoncus sagittis eros. Donec elit arcu, ultrices in tempor quis, mattis quis nisi. Mauris sit amet blandit dui. Sed scelerisque ut velit quis condimentum. Vestibulum a lorem erat. Proin at diam eu diam convallis scelerisque. Praesent quam diam, pulvinar nec pulvinar id, rhoncus ac erat. Nullam quam enim, tristique sed sollicitudin a, sollicitudin ut nulla. Nam vulputate suscipit dui, in auctor sem rhoncus eu.
            Morbi sit amet dui quam. Quisque in augue faucibus, fringilla ipsum ut, dapibus nibh. Cras hendrerit lobortis risus at aliquet. Sed eu quam enim. Phasellus ultrices ligula eget turpis dapibus, auctor lobortis ipsum vestibulum. Nam pulvinar nisi et mollis accumsan. Aenean fringilla metus quam, et porta metus egestas et. In vel neque quam. Curabitur id ipsum ut elit pulvinar porttitor. In quis rutrum diam, eget gravida massa. Donec non felis diam.
          </p>
          {showTick ? (
            <h3 className="text-center  resume-download">
              <FontAwesomeIcon icon={faCheck} /> Download complete
            </h3>
          ) : (
            <h3 className="text-white text-center" onClick={handleDownload}>
              <FontAwesomeIcon icon={faDownload} /> Download my resume
            </h3>
          )}
        </div>
      </div>
    </div>
  </>
  );
}
