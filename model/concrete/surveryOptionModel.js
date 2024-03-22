const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");

const surveryOptionSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surveryQuestions",
        required: [true, "You must be fill in this field."]
    },
    optionText: {
        type: String,
        maxlength: [50, "You have exceeded the maximum number of characters."],
        required: [true, "You must be fill in this field."]
    },
    ...projectBaseSchema.obj
});

const surveryOptionModel = new mongoose.model("surveryOptions", surveryOptionSchema);
module.exports = surveryOptionModel;