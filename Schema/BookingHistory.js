const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
    UserName:{type:String},
    userMobile:{type:String},
    StationName: {type:String},
    chargerType:{type:String},
    // PaymentType:{type:String},
    slotBooked:{type:String},
    energyCharged:{type:String},
    status:{type:String}//active or complete or cancel

});

module.exports = mongoose.model("Bookings",HistorySchema);