const express = require("express");
const Owner = require("../../../Schema/OwnerSchema");
const History = require("../../../Schema/BookingHistory");
const Station = require("../../../Schema/StationSchema");
const Router = express.Router();


Router.get("/",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner"){
        Owner.findOne({UserName: req.user.username},async function(err,owner){
            if(!err){
                let available = [];
                let slots = 0;
                const station = await Station.findOne({station_Name: owner.station_Name});
                station.AvailableTypes.map(function(type){
                    slots = slots+type.slots;
                });
                History.find({StationName: owner.station_Name}).distinct('Date',function(err,history){
                    history.forEach(hist => {
                        let avail = {date: hist,
                                    slots: 0};
                            available.push(avail)                   
                    });
                });
                History.find({StationName: owner.station_Name},async function(err,history){
                    history.forEach(hist => {
                    available.map(function(avail){
                        if(avail.date === hist.Date){
                            avail.slots = avail.slots+1;
                        }
                    }); 
                });
                    res.render("Owner/station_dashboard",{histories: history,Name: owner.Name,available: available,fullSlots: slots});
                });
            }
        });
    }
    else{
        res.redirect("/ownerlogin")
    }
});

module.exports = Router;