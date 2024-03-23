const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");
const Messages = require("../constant/messages.js");

const surveryQuestionSchema = mongoose.Schema({
    surveryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surverys",
        required: [true, Messages.mustBeFill]
    },
    questionText: {
        type: String,
        maxlength: [250, Messages.exceeded],
        required: [true, Messages.mustBeFill]
    },
    questionType: {
        type: String,
        maxlength: [50, Messages.exceeded],
        required: [true, Messages.mustBeFill]
    },
    ...projectBaseSchema.obj
});

const surveryQuestionModel = mongoose.model("surveryQuestions", surveryQuestionSchema);
module.exports = surveryQuestionModel;
