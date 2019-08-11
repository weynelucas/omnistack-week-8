const axios = require('axios');
const { model } = require('mongoose');

const Dev = model('Dev');
const baseURL = 'https://api.github.com';


module.exports = {
  fromGithub(username) {
    return axios.get(`${baseURL}/users/${username}`).then((result) => {
      const { login: username, avatar_url: avatar, name, bio } = result.data;
      return { username, name, bio, avatar}
    });
  },
  
  findUnratedDevs(source) {
    return Dev.find({
      $and: [
        { _id: { $ne: source.id } },
        { _id: { $nin: source.likes } },
        { _id: { $nin: source.dislikes } }
      ]
    });
  }
}