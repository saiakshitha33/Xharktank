const Pitch = require("../entities/Pitch");
const Offer = require("../entities/Offer");

const createPitch = (newPitch) => {
  var pitch = newPitch.save();
  return pitch;
};

const getAllPitches = async () => {
  var pitches = await Pitch.find({});
  return pitches;
};

const getOffer = async (pitchID) => {
  var offer = await Offer.find({ pitchID: pitchID });
  return offer;
};

const getPitchDetail = async (pitchID) => {
  var pitch = await Pitch.findById(pitchID);
  return pitch;
};

const makeOffer = async (newOffer) => {
  var offer = await newOffer.save();
  return offer;
};

module.exports = {
  createPitch,
  getAllPitches,
  getOffer,
  getPitchDetail,
  makeOffer,
};
