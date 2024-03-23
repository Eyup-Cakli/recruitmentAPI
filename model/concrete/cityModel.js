const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");
const Messages = require("../constant/messages.js");

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, Messages.mustBeFill],
        maxlength: [24, Messages.exceeded]
    },
    ...projectBaseSchema.obj
});

const cityModel = mongoose.model("cities", citySchema);
module.exports = cityModel;