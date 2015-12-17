var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }

});

module.exports = mongoose.model('Student', studentSchema);
