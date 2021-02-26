import React, {useState, useEffect} from 'react';
import {io} from 'socket.io-client';
import queryString from 'query-string';

import {Input} from '../input/Input';
import {InfoBar} from '../infobar/InfoBar';
import {Messages} from '../messages/Messages';

import './ChatWindow.css';

let socket;
export const ChatWindow = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState('');
  const ENDPOINT = 'localhost:4001';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);
  
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', {name, room}, (err) => {
      if(err) alert(err);
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', message => {
      setMessages(msgs => [...msgs, message])
    });
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    if(message) socket.emit('sendMessage', message, () => setMessage(''));
  }

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
};