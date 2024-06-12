require("dotenv").config();
const PORT = process.env.PORT;
const { corsOptions, sessionOptions } = require("./config");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const seed = require("./utilies/seed");

const dashboardController = require("./controllers/dashboard.controller");
const logoutController = require("./controllers/logout.controller");
const signupController = require("./controllers/signup.controller");
const loginController = require("./controllers/login.controller");
const rootController = require("./controllers/root.controller");

const app = express();

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.enable("trust proxy");
app.use(session(sessionOptions));

app.get("/", rootController);
app.get("/dashboard", dashboardController);
app.post("/signup", signupController);
app.post("/logout", logoutController);
app.post("/login", loginController);

app.listen(PORT, () => console.log(`---- App running on ${PORT}`));
