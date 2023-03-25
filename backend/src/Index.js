
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
            contact: {
                name: "Car Renting System"
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