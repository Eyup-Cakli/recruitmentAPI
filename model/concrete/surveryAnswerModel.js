const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema");
const Messages = require("../constant/messages.js")

const surveryAnswerSchema = new mongoose.Schema({
    surveryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "surverys",
        required: [true, Messages.mustBeFill]
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surveryQuestions",
        required: [true, Messages.mustBeFill]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, Messages.mustBeFill]
    },
    optionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surveryOptions",
        required: [true, Messages.mustBeFill]
    },
    answerText: {
        type: String,
        default: "",
        maxlength: [250, Messages.exceeded]
    },
    ...projectBaseSchema.obj
});

const surveryAnswerModel = mongoose.model("surveryAnswers", surveryAnswerSchema);
module.exports = surveryAnswerModel;