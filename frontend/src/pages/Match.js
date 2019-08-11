import React from 'react';

import './Match.css';
import itsamatch from '../assets/itsamatch.png';

export default function Match({ user, onClose }) {
  return (
    <div className="Match">
      <img src={itsamatch} alt="It's a Match!"/>
      <img className="Match-avatar" src={user.avatar} alt={user.username}/>
      <strong>{user.name}</strong>
      <p>{user.bio}</p>

      <button type="button" onClick={onClose}>FECHAR</button>
    </div>
  );
}