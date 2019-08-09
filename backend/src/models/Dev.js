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


module.exports = model('Dev', DevSchema);