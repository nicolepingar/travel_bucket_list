const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    location: {
        type: String,
        required: true,
        trim: true,
    },
    urgency: {
        type: Number,
        default: 1 //1 is urgent, 2 is not urgent 
    }
});

const List = model("List", userSchema);

module.exports = List;