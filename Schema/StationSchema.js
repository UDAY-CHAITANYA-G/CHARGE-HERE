const mongoose = require("mongoose");

const StationSchema = new mongoose.Schema({
    station_Name: {type: String},
    Address: {type: String},
    AvailableTypes: [{
        type: {type: String},
        slots:{type: Number},
        timeslots: [{
            slot: {type: String},
            isAvailable: {type: Boolean,default: true}
        }]
    }]
});

module.exports = mongoose.model("Station",StationSchema);