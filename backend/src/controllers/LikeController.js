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

    const { match } = await LikeService.like(user, dev);

    // Send match signal
    if (match) {
      LikeService.match(user, dev, req);
    }

    return res.json(dev.toJSON());
  } 
}