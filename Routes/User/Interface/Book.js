const express = require("express");

const Router = express.Router();

Router.get("/",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        res.render("User/station-interface");
    }
});




module.exports = Router;