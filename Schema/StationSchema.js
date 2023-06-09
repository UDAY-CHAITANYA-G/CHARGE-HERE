const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema({
    station_Name: {type: String},
    Address: {type: String},
    AvailableTypes: [{
        level: {type: String},
        slots:{type: Number},
        timeslots: [{type: String}],
        Rating:{type:String},
        Price:{type:Number}
    }]
});

module.exports = mongoose.model("Station",StationSchema);