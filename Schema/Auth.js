const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const LoginSchema = new mongoose.Schema({
    password:{type: String}
});

LoginSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Auth",LoginSchema);