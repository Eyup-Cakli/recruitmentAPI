const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");
const Messages = require("../constant/messages.js");

const surveryOptionSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surveryQuestions",
        required: [true, Messages.mustBeFill]
    },
    optionText: {
        type: String,
        maxlength: [50, Messages.exceeded],
        required: [true, Messages.mustBeFill]
    },
    ...projectBaseSchema.obj
});

const surveryOptionModel = new mongoose.model("surveryOptions", surveryOptionSchema);
module.exports = surveryOptionModel;