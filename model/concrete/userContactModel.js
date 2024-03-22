const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");

const userContactSchema = new mongoose.Schema({
    cellPhone: {
        type: String,
        required: [true, "You must be fill in this field."]
    },
    email: {
        type: String,
        required: [true, "You must be fill in this field."]
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cityModel",
        required: [true, "You must be fill in this field."]
    },
    address: {
        type: String,
        maxlength: [50, "You have exceeded the maximum number of characters."]
    },
    ...projectBaseSchema.obj
});

const userContactModel = mongoose.model("userContact", userContactSchema);
module.exports = userContactModel;