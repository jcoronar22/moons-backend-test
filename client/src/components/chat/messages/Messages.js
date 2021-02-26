import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import { Message } from './message/Message';

import './Messages.css';

export const Messages = ({messages = [], name}) => {
  return (
    <ScrollToBottom className="messages">
      {messages.length > 0 
        ? messages.map((msg, i) => <div key={i}><Message message={msg} name={name}/></div>)
        : <div className="noMessages">Sin mensajes</div>
      }    
    </ScrollToBottom>
  )
};
