import React from 'react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home_page">
        <h1>
          Rich <br />
          Community
        </h1>
        <div className="flex social-btns">
          <a className="app-btn blu flex vert" href="http:google.com">
            <i>
              <FaGooglePlay />
            </i>
            <p>
              Get it on <br /> <span className="big-txt">Google Play</span>
            </p>
          </a>
          <a className="app-btn blu flex vert" href="http:apple.com">
            <i>
              <FaApple />
            </i>
            <p>
              Available on the <br /> <span className="big-txt">App Store</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
