const express = require("express");
const controller = require("../../../controllers/pitches/pitchController");
const pitchMiddleware = require("../../../middleware/checkPitch");
const offerMiddleware = require("../../../middleware/checkOffer");

const pitchesRouter = () => {
  const router = express.Router();

  router
    .route("/")
    .get(controller.getAllPitches)
    .post(pitchMiddleware.checkingPitch, controller.createPitch);
  router.route("/:pitch_id").get(controller.getPitchDetail);
  router.post(
    "/:pitch_id/makeOffer",
    offerMiddleware.checkingOffer,
    controller.makeOffer
  );
  return router;
};

module.exports = pitchesRouter;
