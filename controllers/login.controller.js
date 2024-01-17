const Model = require("../models/model");

module.exports = async (req, res) => {
  const { username, password } = req.body;

  const { isSuccesfull, message } = await Model.checkIfUserExists(
    username,
    password
  );

  if (isSuccesfull) {
    req.session.userSessionID = username;
    console.log(req.sessionID);
    res.status(200).send({ isSuccesfull, message });
  } else {
    res.status(200).send({ message });
  }
};
