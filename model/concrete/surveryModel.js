const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");
const Messages = require("../constant/messages.js");

const surverySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, Messages.mustBeFill],
        maxlength: [24, Messages.exceeded]
    },
    description: {
        type: String,
        required: [true, Messages.mustBeFill],
        maxlength: [65, Messages.exceeded]
    },
    ...projectBaseSchema.obj
});

const surveryModel = mongoose.model("surverys", surverySchema);
module.exports = surveryModel;