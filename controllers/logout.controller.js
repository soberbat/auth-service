module.exports = async (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("connect.sid").send(200);
  });
};
