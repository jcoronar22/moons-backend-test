import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

export const Join = () => {

  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div>
          <input placeholder="Nombre usuario" className="joinInput" type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <input placeholder="Sala chat" className="joinInput mt-20" type="text" onChange={(e) => setRoom(e.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'}>Unirse a la sala</button>
        </Link>
      </div>
    </div>
  )
}
