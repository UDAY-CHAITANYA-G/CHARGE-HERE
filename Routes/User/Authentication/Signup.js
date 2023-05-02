const express = require("express");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const Users = require("../../../Schema/UserSchema");
const User = require("../../../Schema/Auth");

const Router = express.Router();


Router.get("/",function(req,res){
    res.render("signup");
});

Router.post("/",function(req,res){
    const newUser = new Users({
        Name: req.body.name,
        Mobile: req.body.mobile,
        Mail: req.body.Mail_id,
        UserName: req.body.userName
    });
    newUser.save();
    User.register({username: req.body.userName},req.body.password,function(err){
        if(err){
            console.log(err);
            res.redirect("/signup");
        }
        else{
            // passport.authenticate("local")(req,res,function(){
            //     req.session.role = "user";
            //     res.redirect("/user");
            // });
            res.redirect("login");
        }
    });
});


module.exports = Router;