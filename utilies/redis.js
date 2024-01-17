const session = require("express-session");
const { createClient } = require("redis");
const RedisStore = require("connect-redis").default;

const redisClient = createClient({
  password: "1234",
  socket: {
    host: "redis-14600.c323.us-east-1-2.ec2.cloud.redislabs.com",
    port: 14600,
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
