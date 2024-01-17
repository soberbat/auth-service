const PORT = process.env.PORT;
module.exports = (req, res) => {
  res.status(200).json({ message: ` App is running on port ${PORT}` });
};
