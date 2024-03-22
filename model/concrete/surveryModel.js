const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");

const surverySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "You must be fill in this field."],
        maxlength: [24, "You have exceeded the maximum number of characters."]
    },
    description: {
        type: String,
        required: [true, "You must be fill in this field."],
        maxlength: [65, "You have exceeded the maximum number of characters."]
    },
    ...projectBaseSchema.obj
});

const surveryModel = mongoose.model("surverys", surverySchema);
module.exports = surveryModel;