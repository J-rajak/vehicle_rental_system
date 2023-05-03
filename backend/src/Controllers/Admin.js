
const prisma = require("../Db");
const {
  comparePasswords,
  hashPassword,
} = require("../modules/Auth");

//Add Admin

const createAdmin = async (req, res) => {
    try {
        const hash = await hashPassword(req.body.password); // password hashing using bcrypt and salt.
        // adding admin data in backend database.
        const admin = await prisma.admin.create({
        data: {
            username: req.body.username,
            password: hash,
            email: req.body.email,
            phonenumber: req.body.phonenumber,
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString(),
        },
        });
        res.status(201);
        res.json({ sucess: true, message: "Admin created"});
    } catch (e) {
        res.status(400);
        res.json({ sucess: false,message: "failed to create Admin"});
    }
}

// admin login
const signinAdmin = async (req, res) => {
    try {
        // searching for admin in database using email.
        const user = await prisma.admin.findUnique({
        where: {
            email: req.body.email,
        },
        });
        
        // checking if the password in database and admin given password are correct.
        const isValid = await comparePasswords(req.body.password, user.password); 

        if (!isValid) {
        res.status(401);
        res.json({ message: "Invalid credentials", sucess: false });
        return;
        }
        
        // generate token for the user.
        // const token = createJWT(user);
        res.status(200);
        res.json({ message: "Login Sucessful", sucess: true });
    } catch (error) {
        res.status(404);
        res.json({ message: "User not found", sucess: false });
    }
}

// update admin info
const updateAdmin = async (req,res) => {
    try{
        const admin = await prisma.admin.findUnique({
            where:
            {
                id:req.query.id
            }
        })
        if(admin){
            await prisma.admin.update({
                where:{
                    id:req.query.id
                },
                data:{
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    username:req.body.username,
                    email:req.body.email,
                    phonenumber:req.body.phonenumber,
                    updatedAt:new Date().toLocaleString()
                }
            })
            res.status(200);
            res.json({sucess:true,message:"Admin updated"})
        }else{
            res.status(404);
            res.json({sucess:false,message:"Admin not found"})
        }
    }catch(e){
        res.status(400);
        res.json({sucess:false,message:"Failed to update Admin"})
    }
}

module.exports = {createAdmin,signinAdmin,updateAdmin}