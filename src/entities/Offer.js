const mongoose = require("mongoose");
const { ObjectId } = require("mongoose/lib/schema/index");
const Schema = mongoose.Schema;

// Schema for Offer
const offerSchema = mongoose.Schema({
  investor: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  equity: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  pitchID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Offer", offerSchema);
