const Router = require("express");
const {findUser, getReview, updateUser} = require("./Controllers/User");


const Userrouter = Router();

Userrouter.post("/update",updateUser);
Userrouter.get("/find/:id",findUser);
Userrouter.post("/review",getReview);
module.exports = Userrouter;
