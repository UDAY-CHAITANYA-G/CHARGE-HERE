const express = require("express");
const Stations = require("../../../Schema/StationSchema");
const Router = express.Router();
const Level1Route = require("./stations/Level-1");
const Level2Route = require("./stations/Level-2");
const Level3Route = require("./stations/Level-3");


Router.get("/",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        res.render("User/searchstation");
    }
    else{
        res.redirect("/login");
    }
});


Router.use("/level1",Level1Route);
Router.use("/level2",Level2Route);
Router.use("/level3",Level3Route);

module.exports = Router;