const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
      participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  mode: {
    type: String,
    enum: ['project', 'study', 'casual','meeting'],
    default: 'casual'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Chat', chatSchema);

