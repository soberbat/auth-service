const { redisStore } = require("./utilies/redis");

const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

const sessionOptions = {
  store: redisStore,
  secret: "mysecret",
  saveUninitialized: false,
  resave: false,
  cookie: {
    path: "/",
    maxAge: 1000 * 60 * 30,
  },
};

module.exports = { corsOptions, sessionOptions };
