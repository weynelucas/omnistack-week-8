const { model } = require('mongoose');

const Dev = model('Dev');
const LikeService = require('../services/LikeService');
const DevService = require('../services/DevService');


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
      DevService.match(user, dev, req);
    }

    return res.json(dev.toJSON());
  } 
}