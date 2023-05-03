//Modules
require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

//Routes
const MainRoute = require("./Routes/Main/Home");
const LogoutRoute = require("./Routes/Main/Logout");

const UserLoginRoute = require("./Routes/User/Authentication/Login");
const UserSignupRoute = require("./Routes/User/Authentication/Signup");
const UserInterface = require("./Routes/User/Interface/Main");

const OwnerLoginRoute = require("./Routes/Owner/Authentication/Login");
const OwnerSignupRoute = require("./Routes/Owner/Authentication/Signup");
const OwnerInterface = require("./Routes/Owner/Interface/Main");
//Schema
const Auth = require("./Schema/Auth");

//Express prerequisites
const app = express();
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

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
app.use("/ownerlogin",OwnerLoginRoute);
app.use("/ownersignup",OwnerSignupRoute);
app.use("/owner",OwnerInterface);

//Logout
app.use("/logout",LogoutRoute);

app.listen(3000,function(){
    console.log("Server started on port 3000");
});