
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');    

// import app from './Server'
const app = require('./Server');
const port = 5175

// swager object
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "API Documentation",
            description: "Car Renting System API Documentation",
            version: "1.0.2",
            contact: {
                name: "Car Renting System",
                email: "np03cs4s220015@heraldcollege.edu.np"
            },
            license:{
                name: "Apache 2.0",
                url: "http://www.apache.org/licenses/LICENSE-2"
            },
            servers: ["http://localhost:"+port]
        }    
},
apis:["./src/Docs.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));

app.use(cors());

//default page
app.get('/',(req,res) =>{
    res.status(200);
    res.send({"API_docs":"http://localhost:"+port+"/api-docs"});
})
app.listen(port, () => {
    console.log('http://localhost:'+port);
});