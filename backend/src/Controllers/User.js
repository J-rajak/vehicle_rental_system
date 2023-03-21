
const prisma = require("../Db");
const {
  comparePasswords,
  createJWT,
  hashPassword,
} = require("../modules/Auth");

//Add user
 const createUser = async (req, res) => {
  try {
    const hash = await hashPassword(req.body.password);
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hash,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
    });
    const token = createJWT(user);
    res.status(200);
    res.json({ sucess: true, message: "user created", token });
  } catch (e) {
    res.status(400);
    res.json({ message: `${e}` });
  }
};

// Signin user
 const signinUser = async (req, res) => {
  try {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "Invalid credentials", sucess: false });
    return;
  }

  const token = createJWT(user);
  res.status(200);
  res.json({ token, message: "Login Sucessful", sucess: true });
} catch (error) {
  res.status(404);
  res.json({ message: "Username doesnot exist", sucess: false });
}
};

//Update user by id
 const updateUser = async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        updatedAt: new Date().toLocaleString(),
      },
    });
    res.status(200);
    res.json({
      Sucess: true,
      message: `Data updated for user with id ${req.params.id}`,
    });
  } catch (e) {
    res.status(400);
    res.json({
      Sucess: false,
      message: `user with id ${req.params.id} Not found`,
    });
  }
};

//Get user by id
 const findUser = async (req, res) => {
  let user = null;
  try {
    user = await prisma.user.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200);
    res.json({ user, sucess: true });
  } catch (e) {
    res.status(404);
    res.json({ message: "user not found", sucess: false });
  }
};

// Get all users
 const allUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200);
    console.log(users.length);
    res.send({ users, sucess: true, Count: users.length });
  } catch (e) {
    res.status(400);
    res.json({ message: `${e}`, sucess: false });
  }
};

// Post a review
 const postReview = async (req, res) => {
  try {
    const review = await prisma.reviews.create({
      data: {
        userId: req.body.userId,
        username: req.body.username,
        rating: req.body.rating,
        review: req.body.review,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      },
    });
    res.status(200);
    res.json({ message: `${review}`,sucess:true });
  } catch (e) {
    res.status(400);
    res.json({ message: `${e}`,sucess: false });
  }
};

// update Review
 const updateReview = async (req, res) => {
  try {
    const review = await prisma.reviews.update({
      where: {
        id: req.params.id,
      },
      data: {
        rating: req.body.rating,
        review: req.body.review,
        updatedAt: new Date().toLocaleString(),
      },
    });
    res.status(200);
    res.json({ Sucess: true, message: `Review Updated` });
  } catch (e) {
    res.status(400);
    res.json({ Sucess: false, message: `Review Failed to update!` });
  }
};

  //review
 const getReview = async (req, res) => {
  try {
    const review = await prisma.reviews.findMany({
      where: {
        id: req.params.id,
      },
    });
    res.status(200);
    res.json({ Sucess: true, message: `${review}` });
  } catch (e) {
    res.status(400);
    res.json({ Sucess: false, message: `Review Not found` });
  }
};

module.exports ={createUser,signinUser,updateUser,findUser,allUser,postReview,updateReview,getReview}

/* 
  id   String @id @default(auto()) @map("_id") @db.ObjectId
  username String
  userphonenumber String
  driverincluded Boolean
  carname String
  carlicenseplate String
  cartype String
  dropofflocation String
  rentedfrom DateTime 
  rentedtill DateTime
  paymentmethod paymentMethod 
  createdAt DateTime?
  updatedAt DateTime? @updatedAt */

// export const bookVehicle = async (req, res) => {
//   try {
//     const booking = await prisma.booked.create({
//       data: {
//         id: req.body.userid,
//         username: req.body.username,
//         driverincluded: req.body.driverincluded,
//         carname: req.body.carname,
//         carlicenseplate: req.body.carlicenseplate,
//         cartype: req.body.cartype,
//         paymentmethod: req.body.paymentmethod,
//         dropofflocation: req.body.dropofflocation,
//         rentedfrom: req.body.rentedfrom,
//         rentedtill: req.body.rentedtill,
//         createdAt: new Date().toLocaleString(),
//         updatedAt: new Date().toLocaleString(),
//       },
//     });
//     res.status(200);
//     res.json({ message: `${booking}` });
//   } catch (e) {
//     res.status(400);
//     res.json({ message: `${e}` });
//   }
// };
