require('dotenv').config();
const cors = require("cors");
const express = require("express");
const connectDB = require('./config/db');
const app = express();
app.use(express.json());


const register = require('./routes/register');

connectDB();

const port = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("Hello");
});

app.use("/api/register",register);


app.listen(port,() => {
    console.log(`Server is listening at ${port}`);
})