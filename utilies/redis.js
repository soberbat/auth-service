const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;
require("dotenv").config();

const redisClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

redisClient.connect().catch(console.error);

const redisStore = new RedisStore({
  client: redisClient,
});

redisClient.on("connect", () => {
  console.log("Connected to Redis server");
});

module.exports = { redisStore };
