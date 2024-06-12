module.exports = {
  userExist: "User exist",
  success: "You are logged in",
  userDoesntExist: "User does not exist",
  wrongPassword: "Password is not correct",
  insertUserSQL:
    'INSERT INTO "User" (username, email, password) VALUES ($1, $2, $3)',
  checkIfUserExist: 'SELECT * FROM "User" WHERE username = $1',
  checkIfPasswordCorrect: 'SELECT password FROM "User" WHERE username = $1',
};
