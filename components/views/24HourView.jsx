import React from 'react';

const TwentyFourHourView = () => (
  <div className="openbot-fullhourview">
    <h1 className="openbot-title">Are you a 24 hour member?</h1>
    <div className="openbot-button-container">
      <button type="button" className="button-green">
        Yes
      </button>
      <button type="button" className="button-red">
        No
      </button>
    </div>
  </div>
);

export default TwentyFourHourView;
