const { model } = require('mongoose');

const Dev = model('Dev');
const LikeService = require('../services/LikeService');


module.exports = {
  async store(req, res, next) {
    const { user, params: { devId } } = req;

    const dev = await Dev.findById(devId);

    if (!dev) {
      return res.status(404).json({ 
        error: 'Dev not found.' 
      });
    }

    await LikeService.like(user, dev, true);

    return res.json(user.toJSON());
  } 
}