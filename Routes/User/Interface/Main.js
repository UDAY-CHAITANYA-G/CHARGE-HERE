const express = require("express");
const Router = express.Router();
const searchRoute = require("./searchStation");
const BookingRoute = require("./Book");
const AccountRoute = require("./Account");
const DashBoardRoute = require("./dashboard");
const scheduleRoute = require("./Schedule");

Router.get("/",function(req,res){
    if(req.isAuthenticated() && req.session.role === "user"){
        res.redirect("user/dashboard");
    }
    else{
        res.redirect("/login");
    }
});



Router.get("/help",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        res.render("User/help");
    }
    else{
        res.redirect("/login");
    }
});

Router.get("/payment",function(req,res){
    if(req.isAuthenticated()&& req.session.role === "user"){
        res.render("User/paymentdetails");
    }
    else{
        res.redirect("/login");
    }
});

Router.use("/dashboard",DashBoardRoute);
Router.use("/search",searchRoute);
Router.use("/book",BookingRoute);
Router.use("/account",AccountRoute);
Router.use("/schedule",scheduleRoute);

module.exports = Router;