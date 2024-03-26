import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-sect">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row gx-5 about-row">
          <div className="col-12 col-lg-3 my-5 d-flex justify-content-center">
            <img src="https://fakeimg.pl/300x300?font=bebas" className="rounded" alt="placeholder" />
          </div>
          <div className="col-12 col-lg-9 glassbg d-flex align-items-center about-text">
            <div>
              <h2 className="text-white">About</h2>
              <br />
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at accumsan nibh. Curabitur consequat vestibulum eros, suscipit luctus tellus congue non. Pellentesque a dui mauris. Donec pharetra at nunc vel condimentum. Phasellus non sodales erat, non auctor magna. Nam nec ante non nibh pretium pharetra. Nunc a ante sit amet leo imperdiet porttitor. Praesent arcu mi, sollicitudin sit amet egestas quis, rhoncus sagittis eros. Donec elit arcu, ultrices in tempor quis, mattis quis nisi. Mauris sit amet blandit dui. Sed scelerisque ut velit quis condimentum. Vestibulum a lorem erat. Proin at diam eu diam convallis scelerisque. Praesent quam diam, pulvinar nec pulvinar id, rhoncus ac erat. Nullam quam enim, tristique sed sollicitudin a, sollicitudin ut nulla. Nam vulputate suscipit dui, in auctor sem rhoncus eu.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-9 glassbg about-text">
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at accumsan nibh. Curabitur consequat vestibulum eros, suscipit luctus tellus congue non. Pellentesque a dui mauris. Donec pharetra at nunc vel condimentum. Phasellus non sodales erat, non auctor magna. Nam nec ante non nibh pretium pharetra. Nunc a ante sit amet leo imperdiet porttitor. Praesent arcu mi, sollicitudin sit amet egestas quis, rhoncus sagittis eros. Donec elit arcu, ultrices in tempor quis, mattis quis nisi. Mauris sit amet blandit dui. Sed scelerisque ut velit quis condimentum. Vestibulum a lorem erat. Proin at diam eu diam convallis scelerisque. Praesent quam diam, pulvinar nec pulvinar id, rhoncus ac erat. Nullam quam enim, tristique sed sollicitudin a, sollicitudin ut nulla. Nam vulputate suscipit dui, in auctor sem rhoncus eu.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 my-3 d-flex justify-content-center">
            <img src="https://fakeimg.pl/300x300?font=bebas" className="rounded" alt="placeholder" />
          </div>
        </div>
        </div>
      </div>
  );
}
