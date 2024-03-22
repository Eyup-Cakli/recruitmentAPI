const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema");

const surveryAnswerSchema = new mongoose.Schema({
    surveryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "surverys",
        required: [true, "You must be fill in this field."]
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surveryQuestions",
        required: [true, "You must be fill in this field."]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, "You must be fill in this field."]
    },
    optionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surveryOptions",
        required: [true, "You must be fill in this field."]
    },
    answerText: {
        type: String,
        default: "",
        maxlength: [250, "You have exceeded the maximum number of characters."]
    },
    ...projectBaseSchema.obj
});

const surveryAnswerModel = mongoose.model("surveryAnswers", surveryAnswerSchema);
module.exports = surveryAnswerModel;