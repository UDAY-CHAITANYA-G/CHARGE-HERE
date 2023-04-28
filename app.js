const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("homepage");
});

app.get('/login',function(req,res){
    res.render("login");
});

app.get("/signup",function(req,res){
    res.render("signup");
});

app.get("/EV%20Charger",function(req,res){
    res.render("EV Charger");
});

app.get("/EV%20battery",function(req,res){
    res.render("EV battery");
});

app.get("/usecases",function(req,res){
    res.render("usecases");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});