const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const UserLoginRoute = require("./Routes/User/Authentication/Login");
const UserSignupRoute = require("./Routes/User/Authentication/Signup");
const MainRoute = require("./Routes/Main/Home");

const app = express();
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use("/",MainRoute);

//User Interface
app.use("/login",UserLoginRoute);
app.use("/signup",UserSignupRoute);

//Owner Interface

app.listen(3000,function(){
    console.log("Server started on port 3000");
});