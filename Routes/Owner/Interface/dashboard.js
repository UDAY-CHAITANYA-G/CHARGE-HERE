const express = require("express");
const Owner = require("../../../Schema/OwnerSchema");
const History = require("../../../Schema/BookingHistory");
const Router = express.Router();


Router.get("/",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner"){
        Owner.findOne({UserName: req.user.username},function(err,owner){
            if(!err){
                History.find({StationName: owner.station_Name},function(err,history){
                    res.render("Owner/station_dashboard",{histories: history,Name: owner.Name});
                });
            }
        });
    }
    else{
        res.redirect("/ownerlogin")
    }
});

module.exports = Router;