const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
    UserName:{type:String},
    UserID:{type:String},
    userMobile:{type:String},
    StationName: {type:String},
    chargerType:{type:String},
    // PaymentType:{type:String},
    Date:{type: String},
    slotNumber:{type:Number},
    time:{type:String},
    price:{type:Number},
    energyCharged:{type:Number},
    status:{type:String}//active or complete or cancel

});

module.exports = mongoose.model("Bookings",HistorySchema);