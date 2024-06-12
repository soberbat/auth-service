const db = require("../utilies/connectdb");
const sql = require("./config");

module.exports = {
  insertUser: async function insertUser(username, email, password) {
    try {
      await db.query(sql.insertUserSQL, [username, email, password]);
      return { message: sql.success, isSuccesfull: true };
    } catch (error) {
      console.log(error);
      console.log(error.sqlMessage);
      return { message: sql.userExist, isSuccesfull: false };
    }
  },

  checkIfUserExists: async function (username, password) {
    try {
      const response = await db.query(sql.checkIfUserExist, [username]);
      const userExist = response.rowCount >= 1;

      if (!userExist) {
        return { message: sql.userDoesntExist, isSuccesfull: false };
      }

      const userData = response.rows[0];
      const isPasswordCorrect = module.exports.checkPassword(
        userData,
        password
      );

      return {
        isSuccesfull: isPasswordCorrect,
        message: isPasswordCorrect ? sql.success : sql.wrongPassword,
      };
    } catch (error) {
      console.log(error.sqlMessage);
    }
  },

  checkPassword: function (userData, password) {
    if (userData.password === password.toString()) return true;
    return false;
  },
};
