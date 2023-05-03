const express = require("express");
const Booking = require("../../Schema/BookingHistory");
const Router = express.Router();

Router.get("/:station/:level/:date",function(req,res){
     if(req.isAuthenticated()&& req.session.role === "user"){
        Booking.find({Date: req.params.date,StationName: req.params.station,chargerType: req.params.level},function(err,bookings){
            let slots=[]
            bookings.forEach(booking => {
                slots.push(booking.time);
            });
            res.send(slots);
        });
    }else{
        res.redirect("/login");
    }

});

module.exports = Router;