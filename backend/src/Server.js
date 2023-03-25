const express = require("express");
const adminrouter = require("./Adminrouter");
const Userrouter = require("./UserRouter");
const { createUser, signinUser } = require("./Controllers/User");
const { protect } = require("./modules/auth");
const customCors = require("./Controllers/Cors");

const app = express();

//default middlewares
app.use(customCors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200);
  res.send({ user: ["use1", "use2", "use3"] });
});

// User Routes
app.post("/signup", createUser);

app.post("/signin", signinUser);

app.use("/user", protect, Userrouter);

// Admin routes
app.use("/admin", adminrouter);

module.exports = app;


