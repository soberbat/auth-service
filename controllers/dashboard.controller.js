module.exports = async (req, res) => {
  if (req.session.userSessionID) {
    res.status(200).send("You are viewing an  protected route ");
  } else {
    res.status(500).json({ error: "You can't access this  route" });
  }
};
