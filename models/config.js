module.exports = {
  userExist: "User exist",
  success: "You are logged in",
  userDoesntExist: "User does not exist",
  wrongPassword: "Password is not correct",
  insertUserSQL:
    "INSERT INTO Employee (username, email,password) VALUES (?, ?, ?)",
  checkIfUserExist: "SELECT * FROM Employee WHERE username = ?",
  checkIfPasswordCorrect: "SELECT * FROM Employee WHERE username = ?",
};
