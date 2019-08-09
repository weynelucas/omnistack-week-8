import React, { useState } from 'react';

import './Login.css';
import logo from '../assets/logo.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    history.push('/home');
  }

  return (
    <div className="Login">
      <img src={logo} alt="Tindev"/>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
          placeholder="Entre com o seu usuário do Github"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}