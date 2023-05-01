const express = require("express");

const Router = express.Router();


Router.get("/",function(req,res){
    res.render("homepage");
});

Router.get("/EV%20Charger",function(req,res){
    res.render("EV Charger");
});

Router.get("/EV%20battery",function(req,res){
    res.render("EV battery");
});

Router.get("/usecases",function(req,res){
    res.render("usecases");
});

module.exports = Router;