const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");
const Messages = require("../constant/messages.js");

const userContactSchema = new mongoose.Schema({
    cellPhone: {
        type: String,
        required: [true, Messages.mustBeFill]
    },
    email: {
        type: String,
        required: [true, Messages.mustBeFill]
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cities",
        required: [true, Messages.mustBeFill]
    },
    address: {
        type: String,
        maxlength: [50, Messages.exceeded]
    },
    ...projectBaseSchema.obj
});

const userContactModel = mongoose.model("userContacts", userContactSchema);
module.exports = userContactModel;