const { check, validationResult } = require("express-validator");
checkingOffer = [
  check("investor").notEmpty().isString(),
  check("amount").notEmpty().isNumeric(),
  check("equity").notEmpty().isNumeric(),
  check("comment").notEmpty().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];

module.exports = {
  checkingOffer,
};
