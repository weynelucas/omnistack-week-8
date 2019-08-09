const { model } = require('mongoose');

const Dev = model('Dev');


module.exports = {
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