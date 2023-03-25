
const Router = require("express");
const {allUser, findUser, getAllReviews, deleteReview, getReview} = require("./Controllers/User");
const {addVehicle, deleteVehicle, updateVehicle, allVehicle} = require("./Controllers/Vehicle")

const adminrouter = Router();


// User Routes
adminrouter.get("/user/find/:id",findUser);

adminrouter.get("/user/all",allUser);

// Vehicle Routes


adminrouter.get("/vehicle/all",allVehicle);


adminrouter.post("/vehicle/add",addVehicle);

/**
 * @swagger
 * /admin/vehicle/update/:id:
 *  put:
 *     summary: add vechile data
 *     description: Use to create a new user
 *     consumes:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: user
 *        description : user to create
 *        schema:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *              model:
 *                  type: string
 *              licenseplate:
 *                  type: string
 *              type:
 *                  type: string
 *     responses:
 *      201:
 *         description: Sucess message
 *      400:    
 *          description: failure message 
 *     
 *  */
adminrouter.put("/vehicle/update/:id",updateVehicle);
adminrouter.delete("/vehicle/delete/:id",deleteVehicle);

// Reviews Routes
adminrouter.get("/review/all",getAllReviews)
adminrouter.get("/review/:id",getReview);
adminrouter.delete("/review/:id",deleteReview);

module.exports = adminrouter;
// export default adminrouter;