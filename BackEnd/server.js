require('dotenv').config();
const cors = require("cors");
const express = require("express");
const connectDB = require('./config/db');
const app = express();


//to user json as a response
app.use(express.json());


//routing files
const register = require('./routes/register');
const login = require("./routes/login");


//DB connetion
connectDB();


//Port
const port = process.env.PORT || 5000;


app.get("/",(req,res) => {
    res.send("Hello");
});


//register account
app.use("/api/register",register);


//login account
app.use("/api/login",login);


app.listen(port,() => {
    console.log(`Server is listening at ${port}`);
})