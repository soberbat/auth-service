module.exports = async (req, res) => {
  req.session.destroy((err) => {
    res.clearCookie("sessionCookie", { domain: "auth-test.site" }).send(200);
  });
};
