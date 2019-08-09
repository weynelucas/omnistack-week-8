const { model } = require('mongoose');
const GithubService = require('../services/GithubService');

const Dev = model('Dev');
const DevService = require('../services/DevService');


module.exports = {
  async index(req, res) {
    const { user } = req;

    const results = await DevService.findUnratedDevs(user);

    return res.json({ results });
  },

  async store(req, res, next) {
    try {
      const { username } = req.body;

      if (username === undefined) {
        return res.sendStatus(400);
      }

      var dev = await Dev.findOne({ username: username });

      if (!dev) {
        const data = await GithubService.findUserByUsername(username);
        dev = await Dev.create(data);
      }

      return res.status(201).json(dev.toJSON());
    } catch (err) {
      // Handle axios http errors
      if (err.isAxiosError) {
        return res
          .status(err.response.status)
          .json({ code: 'axios', error: err.message });
      }
      return next(err);
    }

  }
}