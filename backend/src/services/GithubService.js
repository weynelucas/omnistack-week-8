const axios = require('axios');

const baseUrl = 'https://api.github.com';

module.exports = {
  findUserByUsername(username) {
    return axios.get(`${baseUrl}/users/${username}`).then((result) => {
      const { login: username, avatar_url: avatar, name, bio } = result.data;
      return { username, name, bio, avatar}
    });
  }
}