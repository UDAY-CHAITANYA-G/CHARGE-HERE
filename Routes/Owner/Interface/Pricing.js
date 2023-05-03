const express = require("express");
const Owner = require("../../../Schema/OwnerSchema");
const Station = require("../../../Schema/StationSchema");
const History = require("../../../Schema/BookingHistory");
const { findOneAndUpdate } = require("mongoose/lib/model");
const Router = express.Router();

Router.get("/",async function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner"){
        Owner.findOne({UserName: req.user.username},function(err,owner){
            if(!err){
                History.find({StationName: owner.station_Name}, async function(err,History){
                    if(!err){
                        let station = await Station.findOne({station_Name: owner.station_Name});
                        res.render("Owner/slotpricing-and-details",{histories: History,station: station});
                    }
                });
            }
        });
    }
    else{
        res.redirect("/ownerlogin")
    }
});

// Router.patch("/",function(req,res){
//     if(req.isAuthenticated() && req.session.role === "owner"){
//         let newSlots = req.body.newSlots;
//         console.log(newSlots);
//         let newTypes = {
//             slot1: newSlots[0],
//             slot2: newSlots[1],
//             slot2: newSlots[2]
//         }
//         Owner.findOne({UserName: req.user.username},function(err,owner){
//             Station.findOneAndUpdate({station_Name: owner.station_Name},{},function(err){
//                 if(err){
//                     console.log(err);
//                 }
//             });
//         });

//     }
//     else{
//         res.redirect("/ownerlogin")
//     }
// });

module.exports = Router;