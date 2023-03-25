const Router = require("express");
const {findUser, updateUser, updatePassword, deleteuser, getReview ,postReview, updateReview, deleteReview} = require("./Controllers/User");


const Userrouter = Router();

//user routes
Userrouter.get("/find/:id",findUser);
Userrouter.put("/update/:id",updateUser);
Userrouter.put("/updatepassword/:id",updatePassword);
Userrouter.delete("/delete/:id",deleteuser);

// user review routes
Userrouter.get("/review/own/:id",getReview);
Userrouter.post("/review",postReview);
Userrouter.put("/review/:id",updateReview);
Userrouter.delete("/review/:id",deleteReview);
module.exports = Userrouter;
