const express = require("express");
const Router = express.Router();

Router.get("/",function(req,res){
    res.render("User/Location");
});

module.exports = Router;