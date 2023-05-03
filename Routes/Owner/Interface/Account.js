const express = require("express");
const Owner = require("../../../Schema/OwnerSchema");
const Station = require("../../../Schema/StationSchema");
const Router = express.Router();

Router.get("/",function(req,res){
    if(req.isAuthenticated() && req.session.role === "owner"){
        Owner.findOne({UserName: req.user.username},function(err,foundOwner){
            if(err){
                console.log(err);
                res.redirect("/owner")
            }else{
                if(foundOwner){
                    Station.findOne({station_Name: foundOwner.station_Name},function(err,foundStation){
                        res.render("Owner/owner_account_details",{owner: foundOwner,station: foundStation});
                    });
                }
                else{
                    res.send("UserNotFound")
                }
            }
           
        });
    }
    else{
        res.redirect("/ownerlogin")
    }
});

module.exports = Router;