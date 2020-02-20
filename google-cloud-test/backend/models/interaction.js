const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
let interactionSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: Number,
  questionId: Number,
  questionType: String,
  result: String,
  timeSpent: Number
}, {
  collection: 'interactions'
})

module.exports = mongoose.model('Interaction', interactionSchema);
