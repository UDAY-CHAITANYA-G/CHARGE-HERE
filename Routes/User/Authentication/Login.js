const express = require("express");
const passport = require("passport");
const User = require("../../../Schema/Auth");
const Router = express.Router();


Router.get('/',function(req,res){
    res.render("login");
});

Router.post("/",function(req,res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    req.login(user,function(err){
        if(err){
            console.log(err);
            res.redirect("/login");
        }
        else{
            passport.authenticate("local")(req,res,function(){
                req.session.role = "user";
                res.redirect("/user");
            });
        }
    });
});

module.exports = Router;