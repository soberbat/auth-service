const db = require("./connectdb");

const createTable = async () => {
  const createTableQuery = `
      CREATE TABLE IF NOT EXISTS "User" (
          id SERIAL PRIMARY KEY,
          username VARCHAR(50) NOT NULL,
          password VARCHAR(255) NOT NULL,
          email VARCHAR(100) NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
          UNIQUE (username),
          UNIQUE (email)
      );
    `;

  try {
    await db.query(createTableQuery);
  } catch (err) {
    console.error("Error creating table:", err.stack);
  } finally {
  }
};

createTable();
