const { redisStore } = require("./utilies/redis");

const corsOptions = {
  origin: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  exposedHeaders: ["set-cookie"],
};

const sessionOptions = {
  store: redisStore,
  // name: "sessionCookie",
  secret: "mysecret",
  saveUninitialized: false,
  resave: false,
  // cookie: {
  //   path: "/",
  //   domain: "auth-test.site",
  //   maxAge: 1000 * 60 * 30,
  //   sameSite: "none",
  //   secure: true,
  //   httpOnly: true,
  // },
  cookie: {
    path: "/",
    // domain: "auth-test.site",
    maxAge: 1000 * 60 * 30,
    // sameSite: "none",
    // secure: true,
    // httpOnly: true,
  },
};

module.exports = { corsOptions, sessionOptions };
