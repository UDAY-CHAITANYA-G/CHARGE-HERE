const express = require("express");
const Router = express.Router();

Router.get("/",function(req,res){
    req.logout(function(err){
        if(!err){
            res.redirect("/")
        }
    });
});

module.exports = Router;