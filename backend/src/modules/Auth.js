
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


 const comparePasswords = (password,hash) => {
    return bcrypt.compare(password,hash);
}

 const hashPassword = (password) => {
    return bcrypt.hash(password,10);
}

 const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id,
        username: user.username
    },
    process.env.JWT_SECRET
    )
    return token;
}

  const protect = (req,res,next) => {
    const bearer = req.headers.authorization;

    if(!bearer){
        res.status(401);
        res.json({"message":"unauthorized"});
        return
    }
    const [,token] = bearer.split(" "); //spliting the bearer token

    if(!token){
        res.status(401);
        res.json({"message":"wrong"});
        return
    }
    try{
        const user = jwt.verify(token,process.env.JWT_SECRET);
        req.user = user;
        next();
    }catch(e){
        res.status(401);
        res.json({"message":"Invalid token"});
        return
    }
}
module.exports = {comparePasswords,hashPassword,createJWT,protect}