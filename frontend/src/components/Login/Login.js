import React, { useState } from 'react';

import './Login.css';
import logo from '~/assets/logo.svg';

import api from '~/services/api';


export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/devs', { username });
    const { id } = response.data;
    
    history.push(`/dev/${id}`);
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
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}