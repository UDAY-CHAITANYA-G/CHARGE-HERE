const express = require("express");
const History = require("../../../Schema/BookingHistory");
const Router = express.Router();

Router.get("/",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        History.find({UserName: req.user.username},function(err,history){
            res.render("User/schedule",{histories: history});
        });
    }
    else{
        res.redirect("/login");
    }
});

module.exports = Router;