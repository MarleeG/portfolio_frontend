import React from "react";

import "./Home.css";

const Home = props => {
  return (
    <div className="page center home__container">
      <div className="home__wrapper center">
        <div className="home__text">
          <h1 className={`animated fadeIn font-neucha`}>Software Engineer</h1>
          {/* delay-1s */}
          <p
            className='animated fadeIn font-apple'
          >
            Being efficiently creative drives me to develop.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;