
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
    

// import app from './Server'
const app = require('./Server');
const port = 5175
app.use(cors());
app.listen(port, () => {
    console.log('http://localhost:'+port);
});