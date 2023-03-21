const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
dotenv.config()

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


mongoose.connect(
    process.env.DBCONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err)=>{
        if(!err){
            console.log("database connected");
        }else{
            console.log("cannot connect to db");
            console.log(err);
        }
    }
);
const port = process.env.PORT || 8000

app.listen(port, () =>{
    console.log('server is running on', port)
})