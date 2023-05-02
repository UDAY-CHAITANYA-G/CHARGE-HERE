const express = require("express");
const passport = require("passport");
const Owner = require("../../../Schema/OwnerSchema");
const Station = require("../../../Schema/StationSchema");
const User = require("../../../Schema/Auth");
const Router = express.Router();

Router.get("/",function(req,res){
    res.render("ownerSignup");
});

//longitute lattitude

Router.post("/",function(req,res){
    const owner = new Owner({
        Name: req.body.name,
        Mobile: req.body.mobile,
        Aadhar: req.body.aadhar,
        Mail: req.body.mail,
        station_Name: req.body.stationName,
        UserName: req.body.username
    });
    const station = new Station({
        station_Name: req.body.stationName,
        Address: req.body.address,
        AvailableTypes : req.body.AvailableTypes
    });
    owner.save();
    station.save();

    User.register({username: req.body.username},req.body.password,function(err){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send("Success")
        }
    });
});

module.exports = Router;