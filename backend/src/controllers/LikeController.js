const { model } = require('mongoose');

const Dev = model('Dev');


module.exports = {
  async store(req, res, next) {
    const { user, params: { devId } } = req;

    const dev = await Dev.findById(devId);

    if (!dev) {
      return res.status(404).json({ 
        error: 'Dev not found.' 
      });
    }

    if (!user.likes.includes(dev.id)) {
      user.likes.push(dev.id);
      await user.save();
    }

    return res.json(user);
  } 
}