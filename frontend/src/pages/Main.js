import React from 'react';

import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';


export default function Main({ match }) {
  return (
    <div className="Main">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://avatars2.githubusercontent.com/u/6399202?v=4" alt="Francisco Thiago"/>
          <footer>
            <strong>Francisco Thiago</strong>
            <p>Web Developer. Currently working with Vue.js and Laravel.</p>
          </footer>
          <div className="Main-buttons">
            <button>
              <img src={like} alt="Like"/>
            </button>
            <button>
              <img src={dislike} alt="Dislike"/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}