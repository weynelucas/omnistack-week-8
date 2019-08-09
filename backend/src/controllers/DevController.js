const { model } = require('mongoose');
const GithubService = require('../services/GithubService');

const Dev = model('Dev');


module.exports = {
  async store(req, res) {
    if (req.body.username === undefined) {
      return res.sendStatus(400);
    }
    
    var dev = await Dev.findOne({ username: req.body.username });

    if (!dev) {
      const data = await GithubService.findUserByUsername(req.body.username);
      dev = await Dev.create(data);
    }

    return res.status(201).json(dev);
  }
}