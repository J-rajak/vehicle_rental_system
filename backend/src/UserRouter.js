const Router = require("express");
const {findUser, updateUser, updatePassword, deleteuser, getReview ,postReview, updateReview, deleteReview} = require("./Controllers/User");


const Userrouter = Router();

//user routes
Userrouter.get("/find/:id",findUser);
Userrouter.put("/update/:id",updateUser);
Userrouter.put("/updatepassword/:id",updatePassword);
Userrouter.delete("/delete/:id",deleteuser);

// user review routes
Userrouter.post("/review/post",postReview);
Userrouter.post("/review/own/:id",getReview);
Userrouter.put("/review/update/:id",updateReview);
Userrouter.delete("/review/delete/:id",deleteReview);
module.exports = Userrouter;
