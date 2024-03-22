const mongoose = require("mongoose");

const projectBaseSchema = new mongoose.Schema({
    isDeleted: {
        type: Boolean,
        default: false
    }
},{timestamps: true});

module.exports = projectBaseSchema;