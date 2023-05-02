const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
    Name: {type: String},
    Mobile: {type: String},
    Aadhar : {type: String},
    Mail: {type: String},
    station_Name: {type: String},
    UserName: {type:String}
});

module.exports = mongoose.model("Owner",OwnerSchema);