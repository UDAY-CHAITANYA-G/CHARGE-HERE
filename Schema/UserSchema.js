const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name: {type: String},
    Mobile: {type: String, maxlength:[10,"only 10"],minlength:[10,"only 10"]},
    Address: {type: String},
    Mail: {type: String},
    UserName: {type:String}
});

module.exports = mongoose.model("User",UserSchema);