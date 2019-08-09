const { model, Schema } = require('mongoose');


const DevSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  bio: String,
  avatar: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'Dev' }],
  dislikes: [{ type: Schema.Types.ObjectId, ref: 'Dev' }],
}, { timestamps: true });

DevSchema.methods.toJSON = function () {
  return {
    id: this.id,
    username: this.username,
    name: this.name,
    bio: this.bio,
    avatar: this.avatar,
    likes: this.likes,
    dislikes: this.dislikes,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  }
};


module.exports = model('Dev', DevSchema);