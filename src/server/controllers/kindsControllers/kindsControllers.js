const Kind = require("../../../database/models/Kind");

const listKinds = async (req, res, next) => {
  const kinds = await Kind.find();
  if (kinds.length === 0) {
    const error = new Error("Any kind found");
    error.code = 404;
    error.message = "Any kind found";
    next(error);
  } else {
    res.status(200).json(kinds);
  }
};

module.exports = listKinds;
