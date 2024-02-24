const Model = require("../models/model");

const PORT = process.env.PORT;

module.exports = async (req, res) => {
  const { username, password, email } = req.body;
  const { isSuccesfull, message } = await Model.insertUser(
    username,
    email,
    password
  );

  if (isSuccesfull) {
    req.session.userSessionID = username;
    res.status(200).send({ message });
  } else {
    res.status(200).send({ isSuccesfull, message });
  }
};
