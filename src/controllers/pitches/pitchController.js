const usecase = require("../../usecase/usecase");

const createPitch = async (req, res, next) => {
  (entrepreneur = req.body.entrepreneur),
    (pitchTitle = req.body.pitchTitle),
    (pitchIdea = req.body.pitchIdea),
    (askAmount = req.body.askAmount),
    (equity = req.body.equity);

  var pitch = await usecase.createPitch(
    entrepreneur,
    pitchTitle,
    pitchIdea,
    askAmount,
    equity
  );

  res.send(pitch);
};

const getAllPitches = async (req, res, next) => {
  finalPitches = await usecase.getAllPitches();
  res.send(finalPitches);
};

const getPitchDetail = async (req, res, next) => {
  var pitchID = req.params.pitch_id;
  var pitch = await usecase.getPitchDetail(pitchID);
  res.send(pitch);
};

const makeOffer = async (req, res, next) => {
  (investor = req.body.investor),
    (amount = req.body.amount),
    (equity = req.body.equity),
    (comment = req.body.comment);
  pitchID = req.params.pitch_id;

  var offer = await usecase.makeOffer(
    investor,
    amount,
    equity,
    comment,
    pitchID
  );
  res.send(offer);
};

module.exports = {
  createPitch,
  getAllPitches,
  getPitchDetail,
  makeOffer,
};
