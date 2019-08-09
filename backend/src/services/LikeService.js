const { model } = require('mongoose');

const Dev = model('Dev');


module.exports = {
  async like(source, target, dislike=false) {
    const property = dislike ? 'dislike' : 'like';

    if (!source[property].includes(source.id)) {
      source[property].push(target.id);
      await source.save();
    }

    const match = property === 'like' && target.likes.includes(source.id);

    return { dev: source, match };
  }
}