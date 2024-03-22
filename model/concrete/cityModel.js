const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You must be fill in this field."],
        maxlength: [24, "You have exceeded the maximum number of characters."]
    },
    ...projectBaseSchema
});

const cityModel = mongoose.model("cities", citySchema);
module.exports = cityModel;