const express = require("express");
const Router = express.Router();
const AccountRoute = require("./Account");
const PricingRoute = require("./Pricing");
const DashBoardRoute = require("./dashboard");

Router.get("/",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner" ){
        res.redirect("owner/dashboard");
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


Router.use("/dashboard",DashBoardRoute);
Router.use("/account",AccountRoute);
Router.use("/slotpricing",PricingRoute);

module.exports = Router;