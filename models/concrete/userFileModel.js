const mongoose = require("mongoose");

const userFileSchema = new mongoose.Schema({
    cv: {
        type: String,
        default: ""
    },
    profilePicture: {
        type: String,
        default: ""
    },
    ...projectBaseModel
},{timestamps: true});

const userFileModel = mongoose.model("userFile", userFileSchema);
module.exports = userFileModel;