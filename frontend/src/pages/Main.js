import React, { useEffect, useState } from 'react';

import api from '../services/api';

import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';


export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      });

      setUsers(response.data.results);
    }

    loadUsers();
  }, [match.params.id]);

  return (
    <div className="Main">
      <img src={logo} alt="Tindev"/>
      <ul>
        {users.map(user => (
          <li>
            <img src={user.avatar} alt={user.username}/>
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>

            <div className="Main-buttons">
              <button>
                <img src={dislike} alt="Dislike"/>
              </button>
              <button>
                <img src={like} alt="Like"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}