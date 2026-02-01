const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  partner: String,
  eligibility: String,
  benefit: String,
  isLocked: Boolean,

  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Deal", dealSchema);
