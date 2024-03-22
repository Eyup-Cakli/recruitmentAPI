const mongoose = require("mongoose");
const projectBaseSchema = require("../projectBaseSchema.js");

const userFileSchema = new mongoose.Schema({
    cv: {
        type: String,
        default: ""
    },
    profilePicture: {
        type: String,
        default: ""
    },
    ...projectBaseSchema.obj
});

const userFileModel = mongoose.model("userFiles", userFileSchema);
module.exports = userFileModel;