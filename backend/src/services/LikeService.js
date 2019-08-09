const { model } = require('mongoose');

const Dev = model('Dev');


module.exports = {
  async like(source, target, dislike=false) {
    const property = dislike ? 'dislikes' : 'likes';

    if (!source[property].includes(target._id)) {
      source[property].push(target.id);
      await source.save();
    }

    const match = !dislike && target.likes.includes(source.id);

    return { dev: source, match };
  }
}