const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");

const surveryQuestionSchema = mongoose.Schema({
    surveryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "surverys"
    }
})
