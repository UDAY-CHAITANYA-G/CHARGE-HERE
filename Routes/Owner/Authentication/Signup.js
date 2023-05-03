const express = require("express");
const passport = require("passport");
const Owner = require("../../../Schema/OwnerSchema");
const Station = require("../../../Schema/StationSchema");
const User = require("../../../Schema/Auth");
const Router = express.Router();

let details = {
    AvailableTypes:[]
};
let timeslots = [];


Router.get("/",function(req,res){
    res.render("Owner/Signup/Form");
    console.log(details);
});

//longitute lattitude

Router.post("/",function(req,res){
    details.Name = req.body.Name;
    details.Mobile = req.body.Mobile;
    details.Address = req.body.ADDRESS;
    details.Aadhar = req.body.Aadhar;
    details.Mail = req.body.Mail;
    details.station_Name = req.body.STATION_NAME;
    details.UserName = req.body.USER_NAME;
    details.Password = req.body.password;

    console.log(details);
    console.log("Level-1");
    res.redirect("/ownersignup/level-1");
});


Router.get("/level-1",function(req,res){
    res.render("Owner/Signup/level1");
});

Router.post("/level-1",function(req,res){
    timeslots.push({
       slots: req.body.TIME_SLOT_1    
    });
    timeslots.push({
        slots: req.body.TIME_SLOT_2    
     });
     timeslots.push({
        slots: req.body.TIME_SLOT_3    
     });
    details.AvailableTypes.push({
        level: "Level 1",
        slots: req.body.type,
        timeslots: timeslots,
        Price: req.body.PRICE
    });
    timeslots=[]
    console.log(details);
    console.log("Level-2");
    res.redirect("/ownersignup/level-2")
});


Router.get("/level-2",function(req,res){
    res.render("Owner/Signup/level2");
});

Router.post("/level-2",function(req,res){
    timeslots.push({
       slots: req.body.TIME_SLOT_1    
    });
    timeslots.push({
        slots: req.body.TIME_SLOT_2    
     });
     timeslots.push({
        slots: req.body.TIME_SLOT_3    
     });
     timeslots.push({
        slots: req.body.TIME_SLOT_4    
     });
     timeslots.push({
        slots: req.body.TIME_SLOT_5    
     });
     timeslots.push({
        slots: req.body.TIME_SLOT_6    
     });
    details.AvailableTypes.push({
        level: "Level 2",
        slots: req.body.type,
        timeslots: timeslots,
        Price: req.body.PRICE
    });
    timeslots=[]
    console.log(details);
    console.log("Level-3");
    res.redirect("/ownersignup/level-3");
});

Router.get("/level-3",function(req,res){
    res.render("Owner/Signup/level3");
});

Router.post("/level-3",function(req,res){
    timeslots.push({
       slots: "Any"    
    });

    details.AvailableTypes.push({
        level: "Level 3",
        slots: req.body.type,
        timeslots: timeslots,
        Price: req.body.PRICE
    });
    timeslots=[]
    console.log(details);
    console.log("final");
    res.redirect("/ownersignup/final")
});

Router.get("/final",function(req,res){
    res.render("Owner/Signup/FINAL_FORM",{details: details});
});

Router.post("/final",function(req,res){
    const owner = new Owner({
        Name: details.Name,
        Mobile: details.Mobile,
        Aadhar: details.Aadhar,
        Mail: details.Mail,
        station_Name: details.station_Name,
        UserName: details.UserName
    });
    owner.save();
    const station = new Station({
        station_Name: details.station_Name,
        Address: details.Address,
        AvailableTypes : details.AvailableTypes
    });
    station.save();
    User.register({username: details.UserName},details.Password,function(err){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect("/userlogin");
        }
    });
});

module.exports = Router;