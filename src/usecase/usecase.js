const DB = require("../repository/database");
const Pitch = require("../entities/Pitch");
const Offer = require("../entities/Offer");

const createPitch = (
  entrepreneur,
  pitchTitle,
  pitchIdea,
  askAmount,
  equity
) => {
  let newPitch = new Pitch({
    entrepreneur: entrepreneur,
    pitchTitle: pitchTitle,
    pitchIdea: pitchIdea,
    askAmount: askAmount,
    equity: equity,
  });

  var pitch = DB.createPitch(newPitch);
  return pitch;
};

const getAllPitches = async () => {
  var pitches = await DB.getAllPitches();

  var finalPitches = [];

  for (var i = 0; i < pitches.length; i++) {
    var pitch = pitches[i];
    var offer = await DB.getOffer(pitch._id);
    finalPitches.push({ pitch, offers: offer });
  }
  return finalPitches;
};

const getPitchDetail = async (pitchID) => {
  var pitch = await DB.getPitchDetail(pitchID);
  var offer = await DB.getOffer(pitchID);

  pitch = { pitch, offers: offer };
  return pitch;
};

const makeOffer = async (investor, amount, equity, comment, pitchID) => {
  let newOffer = new Offer({
    investor: investor,
    amount: amount,
    equity: equity,
    comment: comment,
    pitchID: pitchID,
  });

  var offer = await DB.makeOffer(newOffer);
  return offer;
};

module.exports = {
  createPitch,
  getAllPitches,
  getPitchDetail,
  makeOffer,
};
