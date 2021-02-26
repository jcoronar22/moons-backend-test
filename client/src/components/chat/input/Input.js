import React from 'react';
import './Input.css'

export const Input = ({message, setMessage, sendMessage}) => {
  return (<form className="form">
    <input 
      className="input"
      type="text" 
      placeholder="Escriba su mensaje..." 
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null} 
    />
    <button className="sendButton" onClick={e => sendMessage(e)} >
      <span className="fa fa-paper-plane"></span>
    </button>
  </form>);
};