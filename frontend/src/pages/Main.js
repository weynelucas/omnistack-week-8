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

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user.id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    });

    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="Main">
      <img src={logo} alt="Tindev"/>
      { users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.username}/>
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className="Main-buttons">
                <button onClick={() => handleDislike(user.id)}>
                  <img src={dislike} alt="Dislike"/>
                </button>
                <button onClick={() => handleLike(user.id)}>
                  <img src={like} alt="Like"/>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) :  (
        <div className="Main-empty">Acabou :(</div>
      )}
    </div>
  );
}