const mongoose = require("mongoose");

const userInfoSchema = new mongoose.Schema({
    name: {
        type : String,
        trim: true,
        minlength : 5,
        maxlength : 25
    },
    mobileNumber : {
        type : Number,
        trim : true,
        minlength : 10,
        maxlength : 10
    },
    address : {
        type : String,
        minlength : 8,
        maxlength : 255
    },
    image : {
        type : String   
    },
    orderCount : {
        type : Number,
    }
});

module.exports = mongoose.model('UsersInfo',userInfoSchema);