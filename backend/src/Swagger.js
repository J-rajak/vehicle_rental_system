
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
            servers: ["http://localhost:"+process.env.PORT],
        },
        securityDefinitions:{
            Bearer:{
            type: "apiKey",
            name: "Authorization",
            scheme: 'bearer',
            in: "header",
            description: ">- Enter the token with the `Bearer: ` prefix, e.g. Bearer abcde12345"
          }
        }
},
apis:["./src/Docs.js"]
};
module.exports = swaggerOptions;