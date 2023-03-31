
const Router = require("express");
const {allUser, findUser, getAllReviews, deleteReview, getReview, getBookData} = require("./Controllers/User");
const {addVehicle, deleteVehicle, updateVehicle, allVehicle} = require("./Controllers/Vehicle")

const adminrouter = Router();


// User Routes
adminrouter.get("/user/find/:id",findUser);

adminrouter.get("/user/all",allUser);

// Vehicle Routes


adminrouter.get("/vehicle/all",allVehicle);


adminrouter.post("/vehicle/add",addVehicle);
adminrouter.put("/vehicle/update/:id",updateVehicle);
adminrouter.delete("/vehicle/delete/:id",deleteVehicle);

// Reviews Routes
adminrouter.get("/review/all",getAllReviews)
adminrouter.get("/review/:id",getReview);
adminrouter.delete("/review/:id",deleteReview);

// Booking Routes
adminrouter.get("/booked",getBookData);

module.exports = adminrouter;
// export default adminrouter;