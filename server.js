require("dotenv").config();
const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
   
const db = require('./db');
const apiRouter = require('./apiRouter');
   
 const  sequelize = db.sequelize;
   
const app = express();
    
const PORT= process.env.APP_PORT;
    
app.use(bodyParser.json());
app.use(cors());
   
app.use('/apiRouter',apiRouter)   
    
app.listen(PORT, ()=>{
    console.log(`server is listening  on ${PORT}`);
});
    
module.exports = app;