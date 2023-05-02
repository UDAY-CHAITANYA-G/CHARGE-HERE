const express = require("express");
const User = require("../../../Schema/UserSchema");
const Router = express.Router();


Router.get("/",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        User.findOne({UserName: req.user.username},function(err,foundUser){
            if(err){
                console.log(err);
                res.redirect("/user");
            }
            else{
                if(foundUser){
                    res.render("User/useraccount",{user: foundUser});                 
                }
                else{
                    console.log("User Not Found");
                    res.redirect("/logout");
                }
            }
        });
    }
    else{
        res.redirect("/login");
    }
});

module.exports = Router;