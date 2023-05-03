const express = require("express");
const Router = express.Router();
const User = require("../../../Schema/UserSchema");
const History = require("../../../Schema/BookingHistory");

Router.get("/",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
            History.find({UserName: req.user.username,status:"booked"},function(err,history){
                if(!err){
                    res.render("User/dashboard",{Name: req.user.username,bookings: history});     
                }    
            });             
    }
    else{
        res.redirect("/login");
    }
});

module.exports = Router;