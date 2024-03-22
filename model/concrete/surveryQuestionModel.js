const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");

const surveryQuestionSchema = mongoose.Schema({
    surveryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surverys",
        required: [true, "You must be fill in this field."]
    },
    questionText: {
        type: String,
        maxlength: [250, "You have exceeded the maximum number of characters."],
        required: [true, "You must be fill in this field."]
    },
    questionType: {
        type: String,
        maxlength: [50, "You have exceeded the maximum number of characters."],
        required: [true, "You must be fill in this field."]
    },
    ...projectBaseSchema
});

const surveryQuestionModel = mongoose.model("surveryQuestions", surveryQuestionSchema);
module.exports = surveryQuestionModel;
