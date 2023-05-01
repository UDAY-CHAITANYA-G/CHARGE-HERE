const express = require("express");

const Router = express.Router();

Router.get("/",function(req,res){
    if(req.isAuthenticated()){
        res.render("User/searchstation");
    }
    else{
        res.redirect("/login");
    }
});

Router.get("/level1",function(req,res){
    if(req.isAuthenticated()){
        res.render("User/level-1-stations");
    }
    else{
        res.redirect("/login");
    }
});

Router.get("/level2",function(req,res){
    if(req.isAuthenticated()){
        res.render("User/level-2-stations");
    }
    else{
        res.redirect("/login");
    }
});

Router.get("/level3",function(req,res){
    if(req.isAuthenticated()){
        res.render("User/level-3-stations");
    }
    else{
        res.redirect("/login");
    }
});


module.exports = Router;