const express = require("express");

const Router = express.Router();

Router.get("/",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner" ){
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

Router.get("/account",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner"){
        res.render("Owner/owner_account_details");
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

module.exports = Router;