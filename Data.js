const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true
  },
  sample: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Data', dataSchema);
