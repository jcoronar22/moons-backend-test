import React from 'react';

import './InfoBar.css';

export const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><span className="fa fa-times closeIcon"></span></a>
    </div>
  </div>
);