module.exports = {
  userExist: "User exist",
  success: "Success",
  userDoesntExist: "User does not exist",
  wrongPassword: "Password is not correct",
  insertUserSQL:
    "INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
  checkIfUserExist: "SELECT * FROM users WHERE username = ?",
  checkIfPasswordCorrect: "SELECT * FROM users WHERE username = ?",
};
