import React from 'react';

import './Login.css';
import logo from '../assets/logo.svg';

export default function Login() {
  return (
    <div className="Login">
      <img src={logo} alt="Tindev"/>

      <form>
        <input 
          type="text"
          placeholder="Entre com o seu usuário do Github"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}