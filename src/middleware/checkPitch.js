const { check, validationResult } = require("express-validator");
checkingPitch = [
  check("entrepreneur").notEmpty().isString(),
  check("pitchTitle").notEmpty().isString(),
  check("pitchIdea").notEmpty().isString(),
  check("askAmount").notEmpty().isNumeric(),
  check("equity").notEmpty().isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

module.exports = {
  checkingPitch,
};
