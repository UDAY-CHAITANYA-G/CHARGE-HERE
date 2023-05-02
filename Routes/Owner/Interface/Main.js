const express = require("express");
const Owner = require("../../../Schema/OwnerSchema");
const Station = require("../../../Schema/StationSchema");
const Router = express.Router();
const AccountRoute = require("./Account");

Router.get("/",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner" ){
        console.log(req.user.username); 
        res.render("Owner/station_dashboard");
    }
    else{
        res.redirect("/ownerlogin")
    }
});

Router.get("/dashboard",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner"){
        res.render("Owner/station_dashboard");
    }
    else{
        res.redirect("/ownerlogin")
    }
});

Router.get("/slotpricing",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner"){
        res.render("Owner/slotpricing-and-details");
    }
    else{
        res.redirect("/ownerlogin")
    }
});


Router.get("/help",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner"){
        res.render("Owner/station_owner_help");
    }
    else{
        res.redirect("/ownerlogin")
    }
});

Router.use("/account",AccountRoute);


module.exports = Router;