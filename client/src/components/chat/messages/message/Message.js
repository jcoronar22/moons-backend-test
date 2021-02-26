import React from 'react'

import './Message.css';

export const Message = ({message: {user, text}, name}) => {
  const trimmedName = name.trim().toLowerCase();
  
  return (
    user === trimmedName
    ? (
      <div>
        <p className="sentText pr-10 justifyEnd">Tú</p>
        <div className="messageContainer justifyEnd">
          <div className="messageBox ownMessageBackground">
            <p className="messageText colorWhite">{text}</p>
            <p className="messageDate">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    )
    : (
      <div>
        <p className="sentText pl-10 justifyStart">{user}</p>
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{text}</p>
              <p className="messageDateDark">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
      
    )
  );
};
