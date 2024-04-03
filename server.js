const express  = require('express');
const colors    = require('colors');
const morgan     = require('morgan');
const dotenv       = require("dotenv");

//dotenv config
dotenv.config();
// rest Object
const app         = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'))

//routes
app.get( '/', (req, res) => {
   return res.status(200).send({
      message: 'Welcome to the API'
   });
});
 // port
const port  = process.env.PORT || 5001;


// listen 
app.listen(port,()=> {
    console.log(`server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`.bgCyan.white);
})

