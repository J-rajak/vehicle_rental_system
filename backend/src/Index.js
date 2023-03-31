
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');    

const app = require('./Server');
const port = process.env.PORT //port where server is running

// swager object
const swaggerOptions = require('./Swagger');
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