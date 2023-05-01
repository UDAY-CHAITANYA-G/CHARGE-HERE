//Modules
require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");

const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

//Routes
const UserLoginRoute = require("./Routes/User/Authentication/Login");
const UserSignupRoute = require("./Routes/User/Authentication/Signup");
const MainRoute = require("./Routes/Main/Home");
const UserInterface = require("./Routes/User/Interface/Main");
//Schema
const Auth = require("./Schema/Auth");

//Express prerequisites
const app = express();
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(session(({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
})));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DB);
mongoose.set("useCreateIndex",true);

passport.use(Auth.createStrategy());

passport.serializeUser(Auth.serializeUser());
passport.deserializeUser(Auth.deserializeUser());


//Website
app.use("/",MainRoute);

//User Interface
app.use("/login",UserLoginRoute);
app.use("/signup",UserSignupRoute);
app.use("/user",UserInterface);

//Owner Interface


app.listen(3000,function(){
    console.log("Server started on port 3000");
});